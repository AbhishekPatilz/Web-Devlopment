let body=document.body
let div=document.createElement('div')

div.style.backgroundColor="pink"
div.style.color="purple"
div.style.borderStyle="solid"

div.innerHTML+=`<h1>Hello</h1>`
body.appendChild(div)

let table=document.createElement('table')

table.innerHTML+=
`<table rules="all",border="1px">
<tr>
<th>Sr.NO</th>
<th>Name</th>
<th>Domain</th>
</tr>
<tr>
<td>01</td>
<td>Abhi</td>
<td>Java</td>
</tr>
<tr>
<td>02</td>
<td>jaggi</td>
<td>Heking</td>
</tr>
</table>`
body.appendChild(table)
