import React, { Component } from 'react'

class MovieAPI extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            input: '',
            APIinfo: ''
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
                posts: data['Search'],
                APIinfo: data['Response']
            })

            console.log(this.state.input);
            console.log(this.state.APIinfo);
        }
        catch(error){
            console.log(error)
        }
    }
    
    render() {
        let {posts, APIinfo} = this.state;

        return (
            <div>
                <form>
                    <input type="text" value={this.state.input} name="input" onChange={this.fetchPosts}></input>
                    <button>Search</button>
                </form>


                <section>
                    {    
                        APIinfo === "True" ?
                            posts.map(post => {
                                
                                return (<article key = {post.imdbID}>
                                
                                    <h2>{post.Title}</h2>
                                    <p>{post.Type}</p>
                                    <p>{post.Year}</p>
                                    <img src={post.Poster}/>
                                    
                                </article>)
                            })  
                        : 'No data'
                    }
                        
                </section>

            </div>
        )
    }
}

export default MovieAPI
