import React, {useState } from 'react';
import {Link} from 'react-router-dom'

const NuevaCuenta = props => {
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

        // password minimo de 6 caracteres

        // los 2 passwords iguales

        // pasar al action
    }
    return (
        <div className="form-usuario" >
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
