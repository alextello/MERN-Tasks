import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = props => {
    // Extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    // Extraer valores del context de autenticacion
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion} = authContext;

    // Manejo de mensajes para login...
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        } else if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje, autenticado, props.history]);

    // state para iniciar sesion
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const {email, password} = usuario;
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
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        // pasar al action
        iniciarSesion({email, password});
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
                    Iniciar sesion
                </h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu correo electronico"
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesion" />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta" >
                    Crear cuenta
                </Link>
            </div>
        </div>
    )
}

export default Login
