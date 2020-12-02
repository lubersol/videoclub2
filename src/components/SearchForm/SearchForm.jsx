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

        fetch(`https://api.themoviedb.org/search/movie?api_key=${API_KEY}&query=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search, totalResults} = results
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
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