import React from 'react'
import Movie from './Movie'
import './Styling/formStyle.css';


export default function Movielist(props) {
    return (
        <div id="content-wrapper">
            {/* <h2 id="search-title">Search hits</h2> */}

            <ul id="ul-search">
            {
                props.APIinfo === "True" ?
                props.posts.map( (post) => (
                    <Movie key={post.imdbID} post={post}/>
                    ))
                    : <p id="error-message">
                        No hits
                    </p>
            }

            </ul>
            
        </div>
    )
}
