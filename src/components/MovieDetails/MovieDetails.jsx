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
                    <img className="imagen" alt={this.state.movie.title} src={`https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`}  ></img>
                    <div className="titulo"> {this.state.movie.title} </div>
                    <div className="dia"><p>Día de estreno: {this.state.movie.release_date} </p></div>
                    <div className="descripcion"> {this.state.movie.overview} </div>
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
                <div className="caratula">
                    {this.pickMovie()}
                </div>
            </div>
        )
    }
}

export default Moviedetails;
