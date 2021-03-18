import React, { Component } from 'react'
import Form from './Form';
import Movielist from './Movielist';

class MovieAPI extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            input: '',
            APIinfo: ''
        }
        

    }

    addInfo = (newState) => {
        this.setState({
           posts: newState.posts,
           input: newState.input,
           APIinfo: newState.APIinfo
        })
    }
  


    
   
    
    render() {
        let {posts, APIinfo} = this.state;

        return (
            <div>

               

                <Form addInfo= {this.addInfo}/>
            

                <Movielist posts={posts} APIinfo={APIinfo}/>

            </div>
        )
    }
}

export default MovieAPI
