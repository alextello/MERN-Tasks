import React, {Fragment, useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = props => {

    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;

    // State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const {nombre} = proyecto;
    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        // Validar proyecto
        if(nombre.trim() === '') {
            mostrarError();
            return;
        }

        // Agregar al state
        agregarProyecto(proyecto)

        // Reinicar el form
        guardarProyecto({
            ...proyecto,
            nombre: ''
        })
    }
    return (
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => mostrarFormulario()}
            >
                Nuevo proyecto
            </button>
            {
                formulario ?
                (
                    <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                    >
                        <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre del proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                        />
                        <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto"
                        />
                    </form>
                )
                :
                null
            }
            {errorFormulario
            ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>
            : null
            }
        </Fragment>

    )
}

export default NuevoProyecto
