const a = require("./index")

let b = async () => {
	let c = await a.search('stress management')
	console.log(c)
	let d = await a.url('https://scholar.google.com/scholar?q=related:0YuT_-rgrZEJ:scholar.google.com/&scioq=stress+management&hl=en&oe=ASCII&as_sdt=0,5')
	console.log(d)
}

b()