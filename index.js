const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

request('https://oldschool.runescape.wiki/w/Experience', 
    (error, res, body) => {
        if (error) return console.log(error);
        if (res.statusCode === 200) return scraping(body);
        return console.log('ERROR INTERNO');
    });

function scraping(body) {
    let $ = cheerio.load(body); //Guardamos la pagina en la variable $
    //console.log($) // Imprime la estructura que trabaja la libreria interna
    $('table.wikitable tbody', 'div.mw-parser-output').each((index, ele) => {
        let tab = $('table.wikitable').children('tbody').html();

        fs.writeFile('./tabla.html', (tab), function(error) {
            if(error) return console.log(error);
            console.log('datos guardados :v')
        });
    });
}