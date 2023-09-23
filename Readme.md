### Google Scholar Scrape
#### MPOP Reverse II
---
| Table of Contents |
|---|
| [Introduction](#intro) |
| [Search](#search) |

---
### Introduction

> This program was developed for those who want to create their RRLs (Review Related Literature) and only have access through their facebook. This project was initiated to developed not to violate the terms and conditions of Google, but to access some websties which is really needed by some students.
---
### Search .search(string article)

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
---
### URL .url(string userAgent[optional], string id)
> This function sets you to insert a specific url of searched


---
### License
#### The MIT License (MIT)
##### Copyright © 2023 Ryann Kim Sesgundo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.