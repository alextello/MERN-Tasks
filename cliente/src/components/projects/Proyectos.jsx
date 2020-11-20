import React from 'react';
import FormTarea from "../tasks/FormTarea";
import ListadoTareas from "../tasks/ListadoTareas";
import AuthContext from '../../context/autenticacion/authContext';
import { useContext, useEffect, Fragment } from 'react';

const Proyectos = props => {

// Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;
    useEffect(()=> {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);
return (
<Fragment>
    <FormTarea />
    <div className="contenedor-tareas">
        <ListadoTareas />
    </div>
</Fragment>
    )
}

export default Proyectos
