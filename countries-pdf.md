# Countries PDF
Use the [pdfkit-table](https://www.npmjs.com/package/pdfkit-table) package to create a .pdf file with a table of countries, with three columns for the country name, capital and population.

Use the provided `countries.json ` file as your data source.

## Implementation steps
* First create a node project with `npm init` and add the `"type": "module"` option to the - _package.json_ file to allow ES6 imports.
* install pdfkit-table: `npm i pdfkit-table`.
* Read the countries.json into an array using the `readJsonFile()` utility function.

* Use the following demo code as a reference for how to create a table in a _.pdf_ file:

```javascript
import fs from 'fs'
import PDFDocument from 'pdfkit-table'

// init document
let doc = new PDFDocument({ margin: 30, size: 'A4' })

// connect to a write stream
doc.pipe(fs.createWriteStream('./students.pdf'))

createPdf(doc)
    .then(() => doc.end())      // close document

function createPdf() {
	const table = {
		title: 'Students',
		subtitle: 'Sorted by age',
		headers: ['Name', 'Age', 'Grade'],
		rows: [
            ['Donni', '22', '10'],
            ['Ronni', '25', '9'],
            ['Boris', '27', '10'],
        ],
	}
	return doc.table(table, { columnsSize: [200, 100, 100] })
}
```

* Sort the array by country name before writing the table to the .pdf file.
* Check out the provided _countries.pdf_ file for a reference to what your result should look like.

Happy Coding :-)