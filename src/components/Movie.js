import React, { Component } from 'react'
import './Styling/formStyle.css';

export class Movie extends Component {
    render() {
        const {post} = this.props;
        return (

        <div id="content-wrapper-for-li">
            <li id = 'movie' style={{ listStyleType: "none" }}>

                <div>

                 <h2 id="movie-title" >{post.Title} </h2>
                 <p id="movie-type" >Type: {post.Type}</p>
                 <p id="movie-year" >{post.Year}</p>
                 <img id="movie-pic" alt ="pic" src={post.Poster}/>
                </div>

            </li>
        </div>
        )
    }
}

export default Movie


