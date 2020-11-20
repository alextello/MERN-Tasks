import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import tareaContext from '../../context/tasks/TareaContext';

const Tarea = ({tarea}) => {

    // obtener el state de tareas
    const tareasContext = useContext(tareaContext);
    const  { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;


    // Funcion que elimina tarea
    const onClickEliminar = (id) => {
        eliminarTarea(id, tarea.proyecto);
        obtenerTareas(tarea.proyecto);
    }

    // Funcion para cambiar estado de tarea
    const cambiarEstado = () => {
        tarea.estado = !tarea.estado;
        cambiarEstadoTarea(tarea);
    }

    const seleccionarTarea = () => {
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                { tarea.estado
                ?
                    (<button type="button" onClick={cambiarEstado} className="completo">Completo</button>)
                    :
                    (<button type="button" onClick={cambiarEstado} className="incompleto">Incompleto</button>)
                }
            </div>
            <div className="acciones">
                <button
                type="button"
                className="btn btn-primario"
                onClick={seleccionarTarea}
                >
                    Editar
                </button>

                <button
                type="button"
                className="btn btn-secundario"
                onClick={() => onClickEliminar(tarea._id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}

Tarea.propTypes = {
    tarea: PropTypes.object
}

export default Tarea
