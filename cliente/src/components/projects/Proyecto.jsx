import React from 'react'
import PropTypes from 'prop-types'

const Proyecto = ({proyecto}) => {
    return (
        <li>
            <button
            className="btn btn-blank"
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}

Proyecto.propTypes = {

}

export default Proyecto
