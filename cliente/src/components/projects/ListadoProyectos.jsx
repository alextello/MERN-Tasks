import React from 'react'
import PropTypes from 'prop-types'
import Proyecto from './Proyecto'

const ListadoProyectos = props => {
    const proyectos = [
        {
            nombre: 'Tienda virtual',
        },
        {
            nombre: 'Red',
        },
        {
            nombre: 'Sitio web',
        }
    ]
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
