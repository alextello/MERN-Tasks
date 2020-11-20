import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPublica = ({component: Component, ...props}) => {
    const authContext = useContext(AuthContext);
    const {autenticado, cargando, token} = authContext;


    return (
        <Route {...props}
        render={props => (!autenticado && !cargando) || !token ? (
            <Component {...props}/>
            ) : (
            <Redirect to="/proyectos" />
        )} />
    );
}

export default RutaPublica;