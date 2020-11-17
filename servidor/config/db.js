const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../variables.env') });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DBMONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB CONECTADA');
    } catch (error) {
        console.log(process.env.DB);
        console.log(error);
        process.exit(1); // Detener la aplicacion
    }
}

module.exports = conectarDB;