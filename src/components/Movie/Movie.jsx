import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        overview: PropTypes.string,
    }

    render() {
        const { id, title, poster_path, release_date, overview } = this.props

        return (
            <Link to={`/detail/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img
                            alt={title}
                            src={poster_path}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{release_date}</p>
                            <p className="subtitle is-6">{overview}</p>
                        </div>
                    </div>
                    </div>
            </Link>
        )
    }
}
