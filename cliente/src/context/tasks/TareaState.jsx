import React, {useReducer} from 'react'
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';

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
        ]
    }

    // Creacion de dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;