import React, { Component } from 'react'

export class MovieAPI extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            input: ''
        }
    }


fetchPosts = async (event) => {
        
        const target = event.target;
        const value = target.type === 'checkbox ' ? target.checked : target.value;
        const name = target.name;
        
        await this.setState({
            [name]: value
        });

            try {

            let url             = "http://www.omdbapi.com/?apikey=b4b7cffe&s=" + this.state.input;
            console.log(url);
            const response      = await fetch(url);
            const data          = await response.json();
            console.log(data);

            
            this.setState({
                posts: data['Search']
                
            })

            console.log(this.state.input);
        }
        catch(error){
            console.log(error)
        }
    }
    
    
    render() {
        const {posts} = this.state;
        return (
            <div>
                <form>
                    <input type="text" value ={this.state.input} name ="input" onChange ={this.fetchPosts}></input>
                    <button>Search</button>
                </form>


            <section>
                
                {
                    posts.map(post => (
                        <article key={post.imdbID}>
                            <h1>{post.Title}</h1>
                            <p>{post.Year}</p>
                            <p>{post.Type}</p>
                            {/* <img alt ="posterPicture">{post.Poster}</img> */}
                        </article>
                    ))
                }
            </section>

            </div>
        )
    }
}

export default MovieAPI
