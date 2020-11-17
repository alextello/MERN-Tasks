const express = require('express');
const router = express.Router();
const { crearTarea, obtenerTareas, actualizarTarea, eliminarTarea } = require('../controllers/tareasController');
const authMiddleware = require('../middlewares/auth.middleware');
const { check } = require('express-validator');

/**
 * Crear tarea
 * api/tareas
 */
router.post('/', authMiddleware, [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('proyecto', 'El proyecto es obligatorio').not().isEmpty(),
], crearTarea);

/**
 * Obtener tareas por proyecto
 */
router.get('/', authMiddleware, [
    check('proyecto', 'El proyecto es obligatorio').not().isEmpty(),
], obtenerTareas);

/**
 * Actualizar tarea
 * @param id ID de la tarea
 */

router.put('/:id', authMiddleware, [
    check('proyecto', 'El proyecto es obligatorio').not().isEmpty(),
], actualizarTarea);

/**
 * Eliminar una tarea
 * @param id ID de la tarea
 */

router.delete('/:id', authMiddleware, [
    check('proyecto', 'El proyecto es obligatorio').not().isEmpty(),
], eliminarTarea);

module.exports = router;