const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../variables.env')));
// require('dotenv').config({ path: path.resolve(__dirname, '../variables.env') });

const conectarDB = async () => {
    // Sobre-escribir variables de entorno
    for (const k in envConfig) {
        process.env[k] = envConfig[k]
    }
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('DB CONECTADA');
    } catch (error) {
        console.log(process.env.DB);
        console.log(error);
        process.exit(1); // Detener la aplicacion
    }
}

module.exports = conectarDB;