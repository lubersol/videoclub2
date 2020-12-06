import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from '../Movie/Movie';
import './MovieList.css';


export class MovieList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props
        return (
            <div className="MovieList">
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.id} className="MovieList-item">
                                <Movie
                                    id={movie.id}
                                    title={movie.title}
                                    release_date={movie.release_date}
                                    poster_path={movie.poster_path}
                                    overview={movie.overview}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}







