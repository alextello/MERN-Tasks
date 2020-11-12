import React, {useReducer} from 'react'
import tareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {TAREAS_PROYECTO,
     AGREGAR_TAREA,
     VALIDAR_TAREA,
     ELIMINAR_TAREA } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
        {id: 1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
        {id: 2, nombre: 'Elegir colores', estado: false, proyectoId: 2},
        {id: 3, nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3},
        {id: 4, nombre: 'Elegir hosting', estado: false, proyectoId: 1},
        {id: 5, nombre: 'Elegir plataforma', estado: true, proyectoId: 3},
        {id: 6, nombre: 'Elegir colores', estado: false, proyectoId: 1},
        {id: 7, nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 2},
        {id: 8, nombre: 'Elegir hosting', estado: false, proyectoId: 2},
        {id: 9, nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
        {id: 10, nombre: 'Elegir colores', estado: false, proyectoId: 1},
        {id: 11, nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 2},
        {id: 12, nombre: 'Elegir hosting', estado: false, proyectoId: 3},
        ],
        tarasProyecto: null,
        errorTarea: null
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

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Valida y muestra un error en caso de ser necesario
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;