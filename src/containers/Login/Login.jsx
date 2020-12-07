import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Login.css';

import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            registrationErrors: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        const {
            email,
            password
        } = this.state;

        await axios.post('https://heroku-mongo-mi-atlas.herokuapp.com/api/user/login', {
            user: {
                email: email,
                password: password
            }
        }, { withCredentials: true }
        )
            .then(response => {
                console.log('logueado', response);
            })
            .catch(error => {
                console.log('error al loguearse', error);
            });
        // history.push('/login')
        event.preventDefault();
    }

    render() {
        return (
            <div className="containerForm">
                <header className="cabeceraBoton">
                    <div className='botonCaja'>
                        <Link to='/' className='boton_atras'>Volver atras</Link>
                    </div>
                </header>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <header className="cajaTitulo">
                        <p className="titular">Area cliente</p>
                    </header>
                    <div className="campo">
                        <input className="datos" type="email" name="email" placeholder="Introduce tu email" value={this.state.email} onChange={this.handleChange} required />
                    </div>
                    <div className="campo">
                        <input className="datos" type="password" name="password" placeholder="Introduce una contraseña" value={this.state.password} onChange={this.handleChange} required />
                    </div>
                    <div className="campo">
                        <button type="submit" className="enviar" onClick={() => this.handleSubmit()}>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        );
    };
};
export default Login;
