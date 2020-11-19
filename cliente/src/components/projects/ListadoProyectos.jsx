import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const ListadoProyectos = props => {

    const proyectosContext = useContext(proyectoContext);
    const {mensaje, proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    // obtener proyectos cuando cargue el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, [])

    // mostrar alertas de errores
    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje])

    // Revisar si hay proyectos
    if (proyectos.length === 0) return <p>No hay proyectos</p>;
    return (
        <ul className="listado-proyectos">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <TransitionGroup>
                {proyectos.map((proyecto, i) => (
                    <CSSTransition
                    key={i}
                    timeout={200}
                    classNames="proyecto"
                    >
                    <Proyecto
                    proyecto={proyecto}
                    />
                    </CSSTransition>
                    ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListadoProyectos
