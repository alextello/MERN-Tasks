import React from 'react';
import { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    // Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // serie de funciones para CRUD
    return (
        <proyectoContext.Provider value={{
            formulario: state.formulario
        }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;