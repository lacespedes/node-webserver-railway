require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT;

// Handlebars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
//TODO: requiere hbs
app.set('view engine', 'hbs');

app.use( express.static('public', {
    extensions: ['html']
  }));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Leonardo Cespedes',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Leonardo Cespedes',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Leonardo Cespedes',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    //res.sendFile(__dirname + '/public/404.html');
    res.render('404', {
        nombre: 'Leonardo Cespedes',
        titulo: 'Curso de Node'
    });

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});