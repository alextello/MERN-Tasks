import React, {useReducer} from 'react'
import tareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {v4 as uuid} from 'uuid';

import {TAREAS_PROYECTO,
AGREGAR_TAREA,
VALIDAR_TAREA,
ELIMINAR_TAREA,
ESTADO_TAREA,
TAREA_ACTUAL,
ACTUALIZAR_TAREA,
LIMPIAR_TAREA } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
        {id: 1, nombre: 'Tarea 1', estado: true, proyectoId: 1},
        {id: 2, nombre: 'Tarea 2', estado: false, proyectoId: 2},
        {id: 3, nombre: 'Tarea 3', estado: true, proyectoId: 3},
        {id: 4, nombre: 'Tarea 4', estado: false, proyectoId: 1},
        {id: 5, nombre: 'Tarea 5', estado: true, proyectoId: 3},
        {id: 6, nombre: 'Tarea 6', estado: false, proyectoId: 1},
        {id: 7, nombre: 'Tarea 7', estado: true, proyectoId: 2},
        {id: 8, nombre: 'Tarea 8', estado: false, proyectoId: 2},
        {id: 9, nombre: 'Tarea 9', estado: true, proyectoId: 1},
        {id: 10, nombre: 'Tarea 10', estado: false, proyectoId: 1},
        {id: 11, nombre: 'Tarea 11', estado: true, proyectoId: 2},
        {id: 12, nombre: 'Tarea 12', estado: false, proyectoId: 3},
        ],
        tarasProyecto: null,
        errorTarea: null,
        tareaSeleccionada: null
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
        tarea.id = uuid();
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

    // Cambia el estado de la tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Edita tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // Limpia la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;