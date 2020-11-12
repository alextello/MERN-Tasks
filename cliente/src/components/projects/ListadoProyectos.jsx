import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const ListadoProyectos = props => {

    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // obtener proyectos cuando cargue el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, [])

    // Revisar si hay proyectos
    if (proyectos.length === 0) return <p>No hay proyectos</p>;
    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map((proyecto, i) => (
                    <CSSTransition
                    key={proyecto.id}
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
