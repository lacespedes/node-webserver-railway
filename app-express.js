const express = require('express')
const app = express()
const port = 8080;

app.use( express.static('public', {
    extensions: ['html']
  }));

/** 
Al usar express static este segmento de codigo ya no aplica
ya que tiene prioridad lo que se implemente en la carpeta definida
*/
app.get('/', (req, res) => {
    res.send('Home page');
});

// y si se crea la carpeta hola-mundo, dentro de la carpeta definida (public)
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su ruta');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});