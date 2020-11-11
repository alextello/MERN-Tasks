import React from 'react';
import { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO
    , OBTENER_PROYECTOS
    , AGREGAR_PROYECTO
    , VALIDAR_FORMULARIO
    , PROYECTO_ACTUAL
    , ELIMINAR_PROYECTO} from '../../types';
import { v4 as uuid } from 'uuid';
const ProyectoState = props => {

const proyectos = [
    {
        id: 1,
        nombre: 'Tienda virtual',
    },
    {
        id: 2,
        nombre: 'Red',
    },
    {
        id: 3,
        nombre: 'Sitio web',
    }
];
    const initialState = {
        proyectos : [],
        formulario: false,
        errorFormulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // serie de funciones para CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();
        // agregar proyecto al array
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto al que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorFormulario: state.errorFormulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
        }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;