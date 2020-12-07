import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = ({ setUser }) => {
    
    const history = useHistory();

    const handleSubmit = event => {

        event.preventDefault();
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        console.log(user);
        axios.post('https://heroku-mongo-mi-atlas.herokuapp.com/api/user/login', user)
            .then(res => {
                console.log('axios ok');
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data));

                setUser(res.data);

                notification.success({ message: 'Login correcto!', description: 'Bienvenido a mi videoclub ' + user.email })

                setTimeout(() => {
                    history.push('/logout');
                }, 1000);
            })
            .catch(error => { throw (error) })
    }


    return (
        <div className="containerForm">
            <header className="cabeceraBoton">
                <div className='botonCaja'>
                    <Link to='/' className='boton_atras'>Volver atras</Link>
                </div>
            </header>
            <form className="formulario" onSubmit={handleSubmit}>
                <header className="cajaTitulo">
                    <p className="titular">Area cliente</p>
                </header>
                <div className="campo">
                    <input className="datos" type="email" name="email" placeholder="Introduce tu email" required />
                </div>
                <div className="campo">
                    <input className="datos" type="password" name="password" placeholder="Introduce una contraseña" required />
                </div>
                <div className="campo">
                    <button type="submit" className="enviar">
                        Enviar
                        </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
