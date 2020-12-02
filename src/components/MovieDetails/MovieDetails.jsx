import React, { Component } from 'react'
import './MovieDetails.css';

class Moviedetails extends Component {
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

    pickMovie() {
        if (this.state.movie?.id) {
            return (
                <div className="caratula">
                    <img className="imagen" alt={this.state.movie.title} src={`https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`}></img>
                        <article className="titulo"> {this.state.movie.title} </article>
                        <article className="dia"><p>Día de estreno: {this.state.movie.release_date} </p></article>
                        <article className="descripcion"> {this.state.movie.overview} </article>
                </div>
            )
        } else {
            return (
                <div>CARGANDO DATOS...</div>
            )
        }
    }
    render() {
        return (
            <div>
                <button className="boton" onClick={() => this.goBack()}>atras</button>
                <div className="containerGlobal">
                    {this.pickMovie()}
                </div>
            </div>
        )
    }
}

export default Moviedetails;
