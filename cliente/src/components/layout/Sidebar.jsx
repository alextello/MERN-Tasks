import React from 'react'
import PropTypes from 'prop-types'
import NuevoProyecto from '../projects/NuevoProyecto'

const Sidebar = props => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus proyectos</h2>
            </div>
        </aside>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
