import React from 'react';
import { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO} from '../../types';

const ProyectoState = props => {
    const initialState = {
            proyectos : [
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
        ],
        formulario: false
    }

    // Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // serie de funciones para CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <proyectoContext.Provider value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            mostrarFormulario
        }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;