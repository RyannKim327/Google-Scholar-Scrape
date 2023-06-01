const a = require("./index")

let b = async () => {
	let c = await a.search('stress management')
	console.log(c)
	
}

b()