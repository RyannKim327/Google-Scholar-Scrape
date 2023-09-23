### Google Scholar Scrape
#### MPOP Reverse II (Ryann Kim Sesgundo)
---
| Table of Contents | |
|---|---|
| [Introduction](#introduction) | [Search](#search-searchstring-article) |
| [URL](#url-urlstring-useragentoptional-string-id) | [Get Citation](#get-citations-getcitationstring-agentoptional-string-citeid) |
| [Other matters](#other-matters) | [License](#license) |

---
### Introduction

> This program was developed for those who want to create their RRLs (Review Related Literature) and only have access through their facebook. This project was initiated to developed not to violate the terms and conditions of Google, but to access some websties which is really needed by some students.
---
### Search .search(string article)

> In this function, you may some different results which you may also see to your google scholar webpage.

**Sample code**
```Javascript
const gs = require("googlescholar-scrape")
let a = async () => {
	let c = await gs.search('stress management')
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
---
### URL .url(string userAgent[optional], string id)
> This function sets you to insert a specific url of searched google scholar.

**Sample code**
``` Javascript
const gs = require("googlescholar-scrape")
let d = await gs.url('https://scholar.google.com/scholar?q=related:0YuT_-rgrZEJ:scholar.google.com/&scioq=stress+management&hl=en&oe=ASCII&as_sdt=0,5')
console.log(d)
```
---
### Get Citations .getCitation(string agent[optional], string citeID)
> This function is just to get some citations such as MLA, APA, Chicago, Harvard, Vancouver, and others if there's have more in the cite popup.

**Sample code**
```Javascript
const gs = require("googlescholar-scrape")
let a = async () => {
	let c = await gs.search('stress management')
	console.log(c)
  let d = await gs.getCitation(c.data[0].citeID)
  console.log(d)
}
a()
```
---
### Other matters
> This is not the official api of google scholar not package created, it is just a webscraped package created for educational purposes. "I" as the developer of this package woult like users, to avoid abuse regarding to the platform by the use of this package.

---
### License
#### The MIT License (MIT)
##### Copyright © 2023 Ryann Kim Sesgundo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.