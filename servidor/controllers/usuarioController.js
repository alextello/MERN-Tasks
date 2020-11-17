const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');
/* ------------------------- Controlador de usuarios ------------------------ */
const crearUsuario = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // Extraer email y password
    const { email, password } = req.body;

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

        // Mensaje de confirmacion
        return res.json({ msg: 'Usuario creado correctamente' });
    } catch (error) {
        console.log(error)
        res.status(400).send('Hubo un error ' + error);
    }
}

module.exports = {
    crearUsuario
}