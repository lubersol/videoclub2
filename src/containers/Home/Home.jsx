import React from 'react';
import { Link } from 'react-router-dom';

//Importo CSS 
import './Home.css';



const Home = () => {
    return (
        <div className='home'>
            <header className='header'>
                <nav className='buttons'>
                    <Link to='/rentmovie'>Populares</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </header>
            <article className='title'>Bienvenido a mi videoclub</article>
            <section className="contenedorCentral">
                <section className='collage'></section>
                <section className="text"><span>Suscríbete y podrás ver una gran variedad de películas y series actuales. Puedes verlas en streaming o descargarlas! <br /><br />
                Para inscribirte sólo necesitas un correo electrónico y una contraseña y tendrás acceso a estrenos, películas  y series populares, con su ficha detallada.</span>
                </section>
            </section>
            <footer className='footer'>
                <div>videoclub App</div>
                <div>©Lucía Bermejo</div>
            </footer>
        </div>
    )
}

export default Home;

