import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
//import { Register } from '../containers/Register/Register';

//Importo librería de estilos Bulma
import 'bulma/css/bulma.css'

//Importo CSS 
import './Home.css';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResult: [],
            searchText: false
        }
    };

    handleResults(datos) {
        localStorage.setItem('datosPelicula', JSON.stringify(datos));
        this.props.history.push('/movielist');

    };

    renderResults = (datos) => {
        const searchResult = datos
        this.setState({
            searchResult,
            searchText: true
        })
        this.handleResults(datos);
    }


    render() {
        return (
            <Fragment>
                <div className='home'>
                    <div className='header'>
                        <span className="logoLubersol">Lubersol</span>
                        <div className="SearchForm-wrapper">
                            <SearchForm renderResults={this.renderResults} />
                        </div>
                        <div>
                        </div>
                        <nav className='buttons'>
                            <Link to='/rentmovie'>Populares</Link>
                            <Link to='/register'>Registro</Link>
                            <Link to='/login'>Login</Link>
                        </nav>
                    </div>
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

