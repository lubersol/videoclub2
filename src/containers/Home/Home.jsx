import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MovieList } from '../../components/MovieList/MovieList';

//Importo CSS 
import './Home.css';

class Home extends Component {

    state = { usedSearch: false, results: [] }


    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults() {
        return this.state.results.length === 0
            ? <p>No hay resultados</p>
            : <MovieList movies={this.state.results} />           
    }

render() {
    return (
        <Fragment>
            <div className='home'>
                <header className='header'>
                    <span className="logoLubersol">Lubersol</span>
                    <div className="SearchForm-wrapper">
                        <SearchForm onResults={this._handleResults} />
                    </div>
                    {this.state.usedSearch
                        ? this._renderResults()
                        : <small></small>
                    }
                    <nav className='buttons'>
                        <Link to='/rentmovie'>Populares</Link>
                        <Link to='/register'>Registro</Link>
                        <Link to='/login'>Login</Link>
                    </nav>
                </header>
                <article className='title'>Bienvenido a mi videoclub</article>
                <section className="contenedorCentral">
                    <section className='collage'></section>
                    <section className="text"><span>Suscríbete y podrás ver una gran variedad de películas y series actuales. Puedes verlas en streaming o descargarlas! <br /><br />
                Para inscribirte sólo necesitas un correo electrónico y una contraseña y tendrás acceso a estrenos, películas  y series populares, con su correspondiente ficha detallada.</span>
                    </section>
                </section>
                <footer className='footer'>
                    <div>videoclub App</div>
                    <div>©Lucía Bermejo</div>
                </footer>
            </div>
        </Fragment>
    );
};
}


export default Home;

