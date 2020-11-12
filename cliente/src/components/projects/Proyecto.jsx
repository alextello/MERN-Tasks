import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tasks/TareaContext';

const Proyecto = ({proyecto}) => {

       // obtener el state de proyectos
       const proyectosContext = useContext(proyectoContext);
       const  {proyectoActual } = proyectosContext;

       // obtener el state de tareas
       const tareasContext = useContext(tareaContext);
       const  { obtenerTareas } = tareasContext;

       // Funcion para agregar el proyecto actual
       const seleccionarProyecto = id =>{
            proyectoActual(id); // Fijar proyecto actual
            obtenerTareas(id); // obtener tareas de proyecto fijado
       }

    return (
        <li>
            <button
            className="btn btn-blank"
            onClick={() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}

Proyecto.propTypes = {
 proyecto: PropTypes.object
}

export default Proyecto
