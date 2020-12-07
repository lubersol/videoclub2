import React, { Component, Fragment } from 'react';
import './MovieList.css';


class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    };

    componentDidMount() {
        let resultado = JSON.parse(localStorage.getItem('datosPelicula'));

        this.setState({ movie: resultado });

    }

    goBack() {
        this.props.history.push('/rentmovie');
    }

    getMovie() {
        if (this.state.movie?.id) {
            return (
                <div className="caratula">
                    <img className="imagen" alt={this.state.movie.title} src={`https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`}  ></img>
                    <div className="film">
                        <article className="titulo"> {this.state.movie.title} 
                        </article> 
                        <article className="dia"><p>Fecha de estreno: {this.state.movie.release_date} </p></article>
                        <article className="descripcion"> {this.state.movie.overview} </article>
                    </div>


                </div>
            )
        } else {
            return (
                <div>CARGANDO...</div>
            )
        }

    }

    render() {
        return (
            <Fragment>
            <button className="boton goBack" onClick={() => this.goBack()}>atras</button>
                <div className="containerGlobal">
                    {this.getMovie()}
                </div>
            </Fragment>
        )
    }
}

export default MovieList;






