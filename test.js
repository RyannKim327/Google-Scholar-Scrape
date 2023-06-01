const a = require("./index")

let b = async () => {
	let c = await a.search('stress management')
	//console.log(c)
	let d = await a.url('https://scholar.google.com/scholar?q=related:7y5_ItPsa6gJ:scholar.google.com/&scioq=&hl=en&oe=ASCII&as_sdt=2005&sciodt=0,5')
	console.log(d)
}

b()