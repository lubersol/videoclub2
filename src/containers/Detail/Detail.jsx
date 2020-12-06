import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = '3e62fb2a0d94f7fd5ade1348729a33cf'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie ({ id }) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({ movie })
        this.setState({ movie })
      })
  }

  componentDidMount () {
    console.log(this.props)
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }

  render () {
    const { Title, Poster_path, Release_date, Overview } = this.state.movie

    return (
      <div>
        {/* <ButtonBackToHome /> */}
        <h1>{Title}</h1>
        <img src={Poster_path} />
        <h3>{Release_date}</h3>
        <p>{Overview}</p>
      </div>
    )
  }
}
export default Detail;