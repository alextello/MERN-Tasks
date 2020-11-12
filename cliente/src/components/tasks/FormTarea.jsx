import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tasks/TareaContext';

const FormTarea = props => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

     // obtener el state de tareas
     const tareasContext = useContext(tareaContext);
     const  { tareaSeleccionada, errorTarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    // State del formulario
    const [tarea, guardarTarea] = useState({
    nombre: '',
    });

    // useEffect para estado de tarea seleccionada
    useEffect(() => {
        if(tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada])

    // Extraer el nombre del proyecto
    const {nombre} = tarea;

    // Si no hay un proyecto seleccionado
    if(!proyecto) return null;

    // Array para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        });
    }

    // submit
    const onSubmit = e => {
        e.preventDefault();
        // Validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }
        // Verificar si es edicion o nueva tarea
        if(tareaSeleccionada === null) {
            // Tarea nueva
            // Agregar tarea
            let tareaNueva = {...tarea, proyectoId: proyectoActual.id, estado: false}
            guardarTarea(tareaNueva);
            agregarTarea(tareaNueva);
        } else {
            // Actualiza tarea
            actualizarTarea(tarea);
            // Elimina tarea seleccionada del state
            limpiarTarea();
        }
        // Obtener y filtrar tareas del proyecto actual
        obtenerTareas(proyectoActual.id);
        // Reinicar form
        guardarTarea({
            nombre: ''
        })
    }


    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                    type="text"
                    className="input-text"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    placeholder="Nombre de la tarea..."/>
                </div>
                <div className="contenedor-input">
                    <input
                    type="submit"
                    value={tareaSeleccionada ? 'Editar tarea' : 'Agregar tarea'}
                    className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    )
}


export default FormTarea
