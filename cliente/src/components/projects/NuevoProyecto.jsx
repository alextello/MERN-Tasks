import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

const NuevoProyecto = props => {

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

        // Agregar al state

        // Reinicar el form
    }
    return (
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            >
                Nuevo proyecto
            </button>
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
        </Fragment>

    )
}

NuevoProyecto.propTypes = {

}

export default NuevoProyecto
