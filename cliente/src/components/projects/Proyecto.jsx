import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({proyecto}) => {

       // obtener el state de proyectos
       const proyectosContext = useContext(proyectoContext);
       const  {proyectoActual } = proyectosContext;

    return (
        <li>
            <button
            className="btn btn-blank"
            onClick={() => proyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}

Proyecto.propTypes = {

}

export default Proyecto
