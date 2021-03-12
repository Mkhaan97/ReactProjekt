import React, { Component } from 'react'

export class MovieAPI extends Component {
    render() {
        return (
            <div>
                <h1>Posts</h1>
                <button onClick={this.fetchData}>Fetch</button>
            </div>
        )
    }
}

export default MovieAPI
