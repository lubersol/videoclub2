import React from 'react';
import { Link } from 'react-router-dom';

//Importo CSS 
import './Home.css';



const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <div className='logo'></div>
                <div className='buttons'>
                    <Link to='/rentmovie'>Populares</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
            <div className='text'>Bienvenido a mi videoclub</div>
            <div className='collage'>
            </div>
            <div className='footer'>
                <div>videoclub App</div>
                <div>©Lucía Bermejo</div>
            </div>
        </div>
    )
}

export default Home;

