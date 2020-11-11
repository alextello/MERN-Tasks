import React, {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = props => {

    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // obtener proyectos cuando cargue el componente
    useEffect(() => {
        obtenerProyectos();
    }, [])

    // Revisar si hay proyectos
    if (proyectos.length === 0) return null;
    return (
        <ul className="listado-proyectos">
            {proyectos.map((proyecto, i) => (
                <Proyecto
                proyecto={proyecto}
                key={i}
                />
            ))}
        </ul>
    )
}

ListadoProyectos.propTypes = {

}

export default ListadoProyectos
