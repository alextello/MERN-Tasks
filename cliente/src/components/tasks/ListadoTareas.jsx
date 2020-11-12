import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tasks/TareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoTareas = props => {
    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // obtener el state de tareas
    const tareasContext = useContext(tareaContext);
    const  { tareasProyecto } = tareasContext;

    // Si no hay proyecto seleccionado...
    if(!proyecto) {
        return <h2>Selecciona un proyecto</h2>
    }

    // Array destructuring para proyecto actual
    const [proyectoActual] = proyecto;

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>
            Proyecto: {proyectoActual.nombre}
            </h2>
            <ul className="listado-tareas">
                { tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : <TransitionGroup>
                {tareasProyecto.map((tarea, i) => (
                    <CSSTransition
                    timeout={200}
                    classNames="tarea"
                    key={i}>
                        <Tarea tarea={tarea}/>
                    </CSSTransition>
                ))}
                </TransitionGroup>
                }
            </ul>
            <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>Eliminar proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTareas
