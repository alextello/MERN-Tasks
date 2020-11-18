/* --------------------------- Rutas para autenticacion -------------------------- */
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { autenticarUsuario, usuarioAutenticado } = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth.middleware');
/**
 * Inicia sesion
 * api/auth
 */
router.post('/',
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 })
    ],
    autenticarUsuario);

router.get('/', authMiddleware, usuarioAutenticado)

module.exports = router;
