const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator')

/* --------------------------- Crea los proyectos --------------------------- */
const crearProyecto = async (req, res) => {
    try {
        // Revisar si hay errores
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }


        // Crear nuevo proyecto
        const proyecto = new Proyecto(req.body);
        // Setear creador via JWT
        proyecto.creador = req.usuario.id;
        // Guardamos el nuevo proyecto
        proyecto.save();
        res.json({ proyecto });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
};

/* ------------- Obtiene todos los proyectos del usuario actual ------------- */
const obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find({ creador: req.usuario.id }).exec();
        res.json({ proyectos });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

/* -------------------------- Actualiza un proyecto ------------------------- */
const actualizarProyecto = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    // Extraer informacion para el proyecto
    const { nombre } = req.body;
    const nuevoProyecto = {};
    if (nombre) {
        nuevoProyecto.nombre = nombre;
    }

    try {
        // Revisar el ID
        const id = req.params.id;
        let proyecto = await Proyecto.findById(id);

        // Revisar que exista el proyecto
        if (!proyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' })
        }
        // Verificar el creador del proyecto
        if (proyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No tienes permisos' });
        }
        // Actualizar
        proyecto = await Proyecto.findOneAndUpdate({ _id: id }, { $set: nuevoProyecto }, { new: true });
        res.json({ proyecto });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
}

/* --------------------------- Elimina un proyecto -------------------------- */
const eliminarProyecto = async (req, res) => {
    try {
        const id = req.params.id;
        const proyecto = await Proyecto.findOneAndDelete({ _id: id }).exec();
        return res.json({ proyecto });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
}
module.exports = {
    crearProyecto,
    obtenerProyectos,
    actualizarProyecto,
    eliminarProyecto
}