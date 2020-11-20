import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'

const RutaPrivada = ({component: Component, ...props}) => {
    const authContext = useContext(AuthContext);
    const {autenticado, cargando, usuarioAutenticado, token} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    },[])

    return (
        <Route {...props}
        render={props => (!autenticado && !cargando) || !token ? (
            <Redirect to="/" />
        ) : (
            <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                     <Component {...props}/>
                </main>
            </div>
        </div>
        )} />
    );
}

export default RutaPrivada;