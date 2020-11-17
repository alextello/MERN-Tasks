const express = require('express');
const conectarDB = require('./config/db');
// creacion de servidor
const app = express();

// Conectar a DB
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

// Iniciar app
app.listen(PORT, () => {
    console.log('El servidor esta funcionando en el puerto ' + PORT);
});