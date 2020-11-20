const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

/* ------------------------------- Crear tarea ------------------------------ */
const crearTarea = async (req, res) => {
    // Verificar errores
    if (await verificarParametros(req, res)) {
        return;
    }
    // Extraer el proyecto
    const proyectoId = req.body.proyecto;
    try {
        // Verificar dueño de proyecto
        if (await verificarProyecto(proyectoId, req, res)) {
            return;
        }
        // Creamos la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        return res.json({ tarea });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error' });
    }
}

/* ----------------------- Obtener tarea por proyecto ----------------------- */
const obtenerTareas = async (req, res) => {
    // Verificar errores
    if (verificarParametros(req, res)) {
        return;
    }
    // Extraer el proyecto
    const proyectoId = req.query.proyecto;
    try {
        // Verificar dueño de proyecto
        if (await verificarProyecto(proyectoId, req, res)) {
            return;
        }

        const tareas = await Tarea.find({ proyecto: proyectoId }).exec();
        return res.json({ tareas });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error' });
    }
}

/* --------------------------- Actualiza una tarea -------------------------- */
const actualizarTarea = async (req, res) => {
    // Verificar errores
    if (verificarParametros(req, req, res)) {
        return;
    }

    // Extraer el proyecto y tarea
    const proyectoId = req.body.proyecto;
    const tareaId = req.params.id;
    try {
        // Verificar dueño de proyecto
        if (await verificarProyecto(proyectoId, req, res)) {
            return;
        }
        const tarea = await Tarea.findById(tareaId).exec();
        if (!tarea) {
            return res.status(404).json({
                msg: 'Tarea no encontrada'
            });
        }

        // Extraccion de datos de tarea
        const { nombre, estado } = req.body;

        // Asignacion de nueva informacion
        if (nombre) tarea.nombre = nombre;
        if (estado !== null || estado !== undefined) tarea.estado = estado;
        await tarea.save();
        return res.json({ tarea });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error' });
    }
}

/* ----------------------------- Eliminar tarea ----------------------------- */
/* --------------------------- Actualiza una tarea -------------------------- */
const eliminarTarea = async (req, res) => {
    // Verificar errores
    if (verificarParametros(req, req, res)) {
        return;
    }

    // Extraer el proyecto y tarea
    const proyectoId = req.query.proyecto;
    const tareaId = req.params.id;
    try {
        // Verificar dueño de proyecto
        if (await verificarProyecto(proyectoId, req, res)) {
            return;
        }
        const tarea = await Tarea.findOneAndRemove({ _id: tareaId }).exec();
        return res.json({ msg: 'Tarea eliminada', tarea });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error' });
    }
}

verificarProyecto = async (proyectoId, req, res) => {
    const proyecto = await Proyecto.findById(proyectoId);
    if (!proyecto) {
        return res.status(404).json({ msg: 'Proyecto no encontrado' });
    }
    // Revisar si el proyecto actual pertenece al usuario autenticado
    if (proyecto.creador.toString() !== req.usuario.id) {
        return res.status(401).json({ msg: 'No autorizado' });
    }
}

verificarParametros = (req, res) => {
    // Verificar errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
}
module.exports = {
    crearTarea,
    obtenerTareas,
    actualizarTarea,
    eliminarTarea
}