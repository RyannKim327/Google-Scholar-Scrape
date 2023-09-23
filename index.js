const axios = require("axios")
const cheerio = require("cheerio")

const ua = async () => {
	let { data } = await axios.get("https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt")
	let res = data.split(/\n/gi)
	return res[Math.floor(Math.random() * res.length)]
}

let getCitation = async (agent, id) => {
	if(id == undefined){
		id = agent
		agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
	}
	if(agent == undefined){
		agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
	}
	let { data } = await axios.get(`https://scholar.google.com/scholar?q=info:${id}:scholar.google.com/&output=cite&scirp=${id}&hl=en`,{
		Headers: {
			"User-Agents": agent
		}
	})
	let $ = cheerio.load(data)
	let html = $("#gs_citt")
	let base = html.find(".gs_cith")
	let result = {}
	base.each((i, e) => {
		result[e.children[0].data] = $(e).next().text()
	})
	return result
}

let url =  async (agent, url) => {
	if(url == undefined){
		url = agent
		agent = await ua()
	}
	let { data } = await axios.get(url, {
		Headers: {
			'User-Agent': agent
		}
	})
	let result = []
	let $ = cheerio.load(data)
	let html = $("div[class='gs_r gs_or gs_scl']")
	if(html.html() == null){
		return {
			"status": 404,
			"query": url,
			"data": [
				"There's a capcha for now, please try again later"
			]
		}
	}
	html.each((i, e) => {
		let elem = $(e)
		let title = elem.find("div[class='gs_or_ggsm']").find("a")
		let citations = "" // await getCitation(agent, elem.attr()['data-cid'])
		let cite_id = elem.attr()['data-cid']
		try{
			let text_title = elem.find('.gs_rt').text()
			let link_title = title.attr()['href']
			let source = elem.find(".gs_a").text()
			let shortDescription = elem.find(".gs_rs").text()
			let cites = elem.find("a[class='gs_or_cit gs_or_btn gs_nph']").next("a")
			let related_articles = cites.next("a")
			result.push({
				title: `${text_title}`,
				shortDescription: shortDescription,
				source: source,
				url: link_title,
				citeID: cite_id,
				cites: {
					cite: cites.text(),
					url: `https://scholar.google.com${cites.attr()['href']}`
				},
				ralatedArticles: {
					url:`https://scholar.google.com${related_articles.attr()['href']}`
				}
			})
		}catch(e){}
	})
	return {
		"status": 200,
		"query": url,
		"data": result
	}
}

let search = async (search) => {
	let agent = await ua()
	let data = await url(agent, `https://scholar.google.com/scholar?q=${search.replace(/\s/gi, "+")}`, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36")
	return data
}

module.exports = {
	search: search,
	url: url,
	getCitation
}