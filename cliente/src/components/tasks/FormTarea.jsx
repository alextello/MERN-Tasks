import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import proyectoContext from '../../context/proyectos/proyectoContext';


const FormTarea = props => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    // Si no hay un proyecto seleccionado
    if(!proyecto) return null;

    // Array para extraer el proyecto actual
    const [proyectoActual] = proyecto;

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
