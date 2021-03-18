import React, { Component } from 'react'


export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            input: '',
            posts: [],
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

        const newState = {
            posts: this.state.posts,
            input: this.state.input,
            APIinfo: this.state.APIinfo
        }
        
            this.props.addInfo(newState)

        

            console.log(this.state.input);
            console.log(this.state.APIinfo);
        }
        catch(error){
            console.log(error)
        }
    }
    



    
    render() {
        return (
            <form>
                    <input type="text" value={this.state.input} name="input" onChange={this.fetchPosts}></input>
                    <button>Search</button>
            </form>
        )
    }
}

export default Form
