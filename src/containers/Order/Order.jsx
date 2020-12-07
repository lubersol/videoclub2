import React, { useEffect, useState } from 'react';
import axios from 'axios'
//import './Order.css';
import { Link } from 'react-router-dom';



const Order = () => {
    const [order, setOrder] = useState([]);
    const token = localStorage.getItem('token')
    useEffect(() => {
        const options = {
            headers: {
                Authorization: token
            }
        };
        axios.get('https://heroku-mongo-mi-atlas.herokuapp.com/api/movie', options)
            .then((res) => {
                console.log(res.data);
                setOrder(res.data.order);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className='appointmentprofile'>
            <div className='grid'>
                {order?.map(movie =>
                    <div key={movie.id}
                        className='infoAppointment'>
                        <div className='inside'>
                            {movie.title}</div>
                        <div className='inside'>
                            {movie.description}</div>
                        <div className='inside'>
                            {movie.date}</div>
                    </div>
                )}
            </div>
            <div className="justifybutton">
                <Link to='/logout' className='backbutton'>Back</Link>
            </div>
        </div>
    );
}

export default Order;