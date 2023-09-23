const a = require("./index")

const search = [
	"stress management",
	"python django as web",
	"covid19",
	"computer management system",
	"steven johnson syndrome"
]

let b = async () => {
	let c = await a.search(search[Math.floor(Math.random() * search.length)])
	console.log(c)
	// let d = await a.url(c[0].query) // 'https://scholar.google.com/scholar?q=related:0YuT_-rgrZEJ:scholar.google.com/&scioq=stress+management&hl=en&oe=ASCII&as_sdt=0,5')
	// console.log(d)
	console.log(c.data[0].citeID)
	let e = await a.getCitation("", c.data[0].citeID)
	console.log(e)
}

b()