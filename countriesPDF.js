import fs from 'fs'
import PDFDocument from 'pdfkit-table'
import { utilService } from './services/util.service.js'


// init document
let doc = new PDFDocument({ margin: 30, size: 'A4' })

// connect to a write stream
doc.pipe(fs.createWriteStream('pdf/countres.pdf'))

createPdf(doc)
    .then(() => doc.end())      // close document


function createPdf() {
    const table = {
        title: 'Countries',
        subtitle: 'Sort by country name',
        headers: ['Country', 'Capital', 'Population'],
        rows: getCountries().map(country => [country.name.common, country.capital, country.population.toLocaleString()]),
    }
    return doc.table(table, { columnsSize: [200, 100, 100] })
}


function getCountries() {
    var countries = []
    countries = utilService.readJsonFile('data/countries.json')
    countries = countries.sort((c1, c2) => c1.name.common.localeCompare(c2.name.common))
    return countries
}
