import React, { Component } from 'react';
import './SearchForm.css';

export class SearchForm extends Component {
state={
    inputMovie:''
}

_handleChange=(e)=>{
    this.setState({inputMovie:e.target.value})
}

_handleSubmit=(e)=>{
    e.preventDefault()
}

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Search..." onChange={this._handleChange} />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                            Search
                        </a>
                    </div>
                </div>
            </form>
        )
    }
}