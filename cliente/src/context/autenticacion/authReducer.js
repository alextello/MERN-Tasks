import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                autenticado: true,
                mensaje: null,
            }
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                mensaje: action.payload
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload
            }
        case CERRAR_SESION:
            return {
                alerta: null
            }
        default:
            return state;
    }
}