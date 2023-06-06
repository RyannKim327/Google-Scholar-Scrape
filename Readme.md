### Google Scholar Scrape
#### MPOP Reverse II
---
| Table of Contents |
|---|
| [Introduction](#intro) |
| [Search](#search) |

---
<h3 id="#intro">Introduction</h3>

> This program was developed for those who want to create their RRLs (Review Related Literature) and only have access through their facebook. This project was initiated to developed not to violate the terms and conditions of Google, but to access some websties which is really needed by some students.
---
<h3 id="search">.search(string article)</h3>

> In this function, you may some different results which you may also see to your google scholar webpage.

**Sample code**
```Javascript
let a = async () => {
	let c = await a.search('stress management')
	console.log(c)
}
a()
```
**Result [Error]**
```JSON
{
  "status": 404,
  "query": "https://scholar.google.com/scholar?q=computer+management+system",
  "message": "There's a capcha for now, please try again later"
}
```
