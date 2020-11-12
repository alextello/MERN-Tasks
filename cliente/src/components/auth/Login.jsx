import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Login = props => {
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

        // pasar al action
    }
    return (
        <div className="form-usuario" >
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
