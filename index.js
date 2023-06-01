const axios = require("axios")
const cheerio = require("cheerio")

module.exports =  async (search) => {
	let { data } = await axios.get(`https://scholar.google.com/scholar?q=${search.replace(/\s/gi, "+")}`)
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
			result.push({
				title: `${text_title}`,
				link: link_title,
				citation: {
					cite: citations.text(),
					link: `https://scholar.google.com${citations.attr()['href']}`
				}
			})
		}catch(e){}
	})
	console.log(result)
}