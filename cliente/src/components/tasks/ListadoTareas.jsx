import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Tarea from './Tarea'

const ListadoTareas = props => {
    const tareasProyecto = [
        {nombre: 'Elegir plataforma', estado: true},
        {nombre: 'Elegir colores', estado: false},
        {nombre: 'Elegir plataformas de pago', estado: true},
        {nombre: 'Elegir hosting', estado: false},
    ]
    return (
        <Fragment>
            <h2>
            Proyecto: Tienda virtual
            </h2>
            <ul className="listado-tareas">
                { tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : (tareasProyecto.map(tarea => (
                    <Tarea tarea={tarea} />
                )))
                }
            </ul>
        </Fragment>
    )
}

ListadoTareas.propTypes = {

}

export default ListadoTareas
