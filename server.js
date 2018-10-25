var express = require('express');
var app = express();

const hbs = require('hbs');

//definir exportacion de helpers.js
require('./hbs/helpers');

//variable entorno globales por de heroku
const port = process.env.PORT || 3000;


//para especificar el folder al cual se queire acceder (publico)
app.use(express.static(__dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');





app.get('/', (req, res) => {
    //res.send('Hola mundo');



    res.render('home', {
        nombre: 'edgardo',

    });
});

app.get('/about', (req, res) => {
    //res.send('Hola mundo');



    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});