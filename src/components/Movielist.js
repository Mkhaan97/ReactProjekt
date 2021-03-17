import React from 'react'
import Movie from './Movie'


export default function Movielist(props) {
    return (
        <div>
            <h2>Search hits</h2>

            <ul>
            {
                props.APIinfo === "True" ?
                props.posts.map( (post) => (
                    <Movie key={post.imdbID} post={post}/>
                    ))
                    : 'No hits'
            }

            </ul>
            
        </div>
    )
}
