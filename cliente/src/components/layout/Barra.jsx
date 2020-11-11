import React from 'react'
import PropTypes from 'prop-types'

const Barra = props => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Alex Tello</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
        </header>
    )
}

Barra.propTypes = {

}

export default Barra
