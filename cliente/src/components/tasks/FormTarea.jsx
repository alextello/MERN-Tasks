import React from 'react'
import PropTypes from 'prop-types'

const FormTarea = props => {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                    type="text"
                    className="input-text"
                    name="nombre"
                    placeholder="Nombre de la tarea..."/>
                </div>
                <div className="contenedor-input">
                    <input
                    type="submit"
                    value="Agregar tarea"
                    className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
        </div>
    )
}

FormTarea.propTypes = {

}

export default FormTarea
