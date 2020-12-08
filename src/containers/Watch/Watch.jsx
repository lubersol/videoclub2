import React from 'react';
import axios from 'axios'
import './Watch.css';
import { Input, notification } from 'antd';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';


const Watch = () => {
    const history = useHistory();
    const token = localStorage.getItem('token')
    const handleSubmit = event => {
        event.preventDefault();
        const headers = { headers: { Authorization: token } }
        const watchMovie = {
            title: event.target.title.value,
            createdAt: event.target.createdAt.value,
            returnDate: event.target.returnDate.value
        };
        axios.post('https://heroku-mongo-mi-atlas.herokuapp.com/api/order', watchMovie, headers)
            .then(res => {
                console.log(res.data)
                notification.success({ message: 'Pelicula alquilada', description: 'La fecha de devolución será 3 días despues del alquiler' })

                setTimeout(() => {
                    history.push("/orders")
                }, 1500);
            }).catch(error => {
                console.log(error)
                notification.error({ message: 'Error', description: 'Se ha producido un error' })
            })
    }
    return (
        <div className='create'>
            <div className="headerCreate">
                <div className='buttonCreate'>
                    <Link to='/profile' className='linkBack'>Atras</Link>
                </div>
            </div>
            <form className="create-form" onSubmit={handleSubmit}>
                <Input type="title" name="title" required placeholder="Escribe el titulo" />
                <Input type="date" name="date" required placeholder="Fecha" />
                

                <button type="primary" className='noStyle' htmlType="submit">Alquilar</button>

            </form>

        </div>
    )
}

export default Watch;
