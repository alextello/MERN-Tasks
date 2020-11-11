import React from 'react'
import PropTypes from 'prop-types'
import NuevoProyecto from '../projects/NuevoProyecto'
import ListadoProyectos from '../projects/ListadoProyectos'

const Sidebar = props => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
