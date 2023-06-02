const axios = require("axios")
const cheerio = require("cheerio")

let getCitation = async (id) => {
	let { data } = await axios.get(`https://scholar.google.com/scholar?q=info:${id}:scholar.google.com/&output=cite`)
	let $ = cheerio.load(data)
	let html = $("#gs_citt")
	console.log(html.html())
}

let url =  async (url) => {
	let { data } = await axios.get(url)
	let $ = cheerio.load(data)
	let capcha = $("#gs_captcha_ccl")
	let html = $("div[class='gs_r gs_or gs_scl']")
	let result = []
	console.log(capcha.html())
	await html.each(async (i, e) => {
		let elem = $(e)
		let title = elem.find("div[class='gs_or_ggsm']").find("a")
		let citations = await getCitation(elem.attr()['data-cid'])
		result.push(elem.attr()['data-cid'])
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
				citation: citations,
				cites: {
					cite: cites.text(),
					url: `https://scholar.google.com${cites.attr()['href']}`
				},
				ralatedArticles: {
					url:`https://scholar.google.com${related_articles.attr()['href']}`
				}
			})
		}catch(e){
			console.log(e)
		}
	})
	return result
}

let search = async (search) => {
	let data = await url(`https://scholar.google.com/scholar?q=${search.replace(/\s/gi, "+")}`)
	return data
}

module.exports = {
	search: search,
	url: url
}