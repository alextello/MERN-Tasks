const express = require('express');
const conectarDB = require('./config/db');
// creacion de servidor
const app = express();

// Conectar a DB
conectarDB();

// Puerto de app
const PORT = process.env.PORT || 4000;

// Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

// Iniciar app
app.listen(PORT, () => {
    console.log('El servidor esta funcionando en el puerto ' + PORT);
});