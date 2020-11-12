import React, {useReducer} from 'react'
import tareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {TAREAS_PROYECTO} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
        {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
        {nombre: 'Elegir colores', estado: false, proyectoId: 2},
        {nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3},
        {nombre: 'Elegir hosting', estado: false, proyectoId: 1},
        {nombre: 'Elegir plataforma', estado: true, proyectoId: 3},
        {nombre: 'Elegir colores', estado: false, proyectoId: 1},
        {nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 2},
        {nombre: 'Elegir hosting', estado: false, proyectoId: 2},
        {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
        {nombre: 'Elegir colores', estado: false, proyectoId: 1},
        {nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 2},
        {nombre: 'Elegir hosting', estado: false, proyectoId: 3},
        ],
        tarasProyecto: null
    }

    // Creacion de dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear funciones

    // Obtener tareas de proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTareas
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;