const axios = require("axios")
const cheerio = require("cheerio")

let url =  async (url) => {
	let { data } = await axios.get(url)
	let $ = cheerio.load(data)
	let html = $("div[class='gs_r gs_or gs_scl']")
	let result = []
	html.each((i, e) => {
		let elem = $(e)
		let title = elem.find("div[class='gs_or_ggsm']").find("a")
		try{
			let text_title = elem.find('.gs_rt').text()
			let link_title = title.attr()['href']
			let citations = elem.find("a[class='gs_or_cit gs_or_btn gs_nph']").next("a")
			let related_articles = citations.next("a")
			result.push({
				title: `${text_title}`,
				url: link_title,
				citation: {
					cite: citations.text(),
					url: `https://scholar.google.com${citations.attr()['href']}`
				},
				ralatedArticles: {
					url:`https://scholar.google.com${ related_articles.attr()['href']}`
				}
			})
		}catch(e){}
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