const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
/* ------------------------- Controlador de usuarios ------------------------ */
const crearUsuario = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // Extraer email y password
    const { email } = req.body;

    try {
        // Revisar si hay un usuario previo
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear usuario
        usuario = new Usuario(req.body);

        // Guardar nuevo usuario
        await usuario.save();

        // Crear y firmar JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        // Firmar JWT
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1d'
        }, (err, token) => {
            if (err) throw error;
            return res.json({ token });
        });
        // Mensaje de confirmacion
    } catch (error) {
        console.log(error)
        res.status(400).send('Hubo un error ' + error);
    }
}

module.exports = {
    crearUsuario
}