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
	let e = await a.getCitation(d.data[0].citeID)
	console.log(e)
}

b()