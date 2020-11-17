const express = require('express');
const router = express.Router();
const { crearProyecto,
    obtenerProyectos,
    actualizarProyecto,
    eliminarProyecto } = require('../controllers/proyectoController');
const authMiddleware = require('../middlewares/auth.middleware');
const { check } = require('express-validator');

/**
 * Crea proyectos
 * api/proyectos
 */
router.post('/', authMiddleware, [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
], crearProyecto);

/**
 * Obtener proyectos
 */
router.get('/', authMiddleware, obtenerProyectos);

/**
 * Actualizar un proyecto
 * @param id ID del proyecto
 */
router.put('/:id', authMiddleware, [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
], actualizarProyecto);


/**
 * Eliminar un proyecto
 * @param id ID del proyecto
 */
router.delete('/:id', authMiddleware, eliminarProyecto);


module.exports = router;