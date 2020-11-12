import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import tareaContext from '../../context/tasks/TareaContext';

const Tarea = ({tarea}) => {

    // obtener el state de tareas
    const tareasContext = useContext(tareaContext);
    const  { eliminarTarea, obtenerTareas } = tareasContext;

    // Funcion que elimina tarea
    const onClick = () => {
        eliminarTarea(tarea.id);
        obtenerTareas(tarea.proyectoId);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                { tarea.estado
                ?
                    (<button type="button" className="completo">Completo</button>)
                    :
                    (<button type="button" className="incompleto">Incompleto</button>)
                }
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario">Editar</button>
                <button
                type="button"
                className="btn btn-secundario"
                onClick={onClick}
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}

Tarea.propTypes = {

}

export default Tarea
