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
router.post('/', autenticarUsuario);

router.get('/', authMiddleware, usuarioAutenticado)

module.exports = router;
