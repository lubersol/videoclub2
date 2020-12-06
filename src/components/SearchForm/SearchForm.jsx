import React, { Component } from 'react';
import './SearchForm.css';

const API_KEY = '3e62fb2a0d94f7fd5ade1348729a33cf';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults ="0" } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }

    
    render() {
        return (
            <form onSubmit={this._handleSubmit} >
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Search..." onChange={this._handleChange} />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
