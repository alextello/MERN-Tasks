const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const autenticarUsuario = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // extraer email
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email }).exec();
        if (!usuario) {
            return res.status(400).json({ msg: 'No se encontró el usuario' });
        }
        const passCorrecto = await bcrypt.compareSync(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({ msg: 'Password incorrecto' });
        }
        const payload = {
            usuario: {
                id: usuario.id
            }
        }
        // Generar JWT
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1d'
        }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })
    } catch (error) {
        console.log(error);
    }
};

// Obtiene qué usuario está autenticado
const usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        return res.json({ usuario });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error' })
    }
}

module.exports = {
    autenticarUsuario,
    usuarioAutenticado
}