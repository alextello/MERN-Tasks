/* --------------------------- Rutas para usuarios -------------------------- */
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const { check } = require('express-validator');
/* ----------------------------- Crear usuarios ----------------------------- */

/**
 * api/usuarios
 */
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 }),
    ],
    usuarioController.crearUsuario);

module.exports = router;
