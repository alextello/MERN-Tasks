import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = props => {
    // Extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    // Extraer valores del context de autenticacion
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    // En caso de que el usuario se haya autenticado o no...
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        } else if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje, autenticado, mostrarAlerta, props.history]);

    // state para iniciar sesion
      const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmarPassword: '',
    });

    const {email, password, nombre, confirmarPassword} = usuario;
   // cambio de valores en formulario
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
        // validar que no haya campos vacios
        if(email.trim() === '' ||
        password.trim() === '' ||
        nombre.trim() === '' ||
        confirmarPassword.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        // password minimo de 6 caracteres
        if(password.trim().length < 6) {
            mostrarAlerta('La contraseña debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }
        // los 2 passwords iguales
        if(password !== confirmarPassword) {
            mostrarAlerta('Los campos de contraseña no coinciden', 'alerta-error');
            return;
        }
        // pasar al action
        registrarUsuario({nombre, email, password});
    }
    return (
        <div className="form-usuario" >
            {alerta ?
            (
            <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
            )
            :
                null
            }
        <div className="contenedor-form sombra-dark">
            <h1>
                Crear cuenta
            </h1>
            <form onSubmit={onSubmit}>
                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    onChange={onChange}
                    value={nombre}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="email">Correo</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu correo"
                    onChange={onChange}
                    value={email}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={onChange}
                    value={password}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="confirmarPassword">Confirmar password</label>
                    <input
                    type="password"
                    id="confirmarPassword"
                    name="confirmarPassword"
                    placeholder="Repite tu password"
                    onChange={onChange}
                    value={confirmarPassword}
                    />
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                </div>
            </form>
            <Link to={'/'} className="enlace-cuenta" >
                Iniciar sesion
            </Link>
        </div>
    </div>
    )
}

export default NuevaCuenta
