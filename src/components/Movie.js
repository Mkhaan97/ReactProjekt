import React, { Component } from 'react'

export class Movie extends Component {
    render() {
        const {post} = this.props;
        return (

            <li style={{ listStyleType: "none" }}>

                 <h2> {post.Title} </h2>
                 <p style={{textTransform: 'capitalize'}}>Type: {post.Type}</p>
                 <p>{post.Year}</p>
                 <img alt ="pic" src={post.Poster}/>

            </li>
        )
    }
}

export default Movie


