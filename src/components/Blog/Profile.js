import React from 'react'
import Content from "./Content";

class Profile extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username : "",
            password: ''
        }
    }

    handleInput = (event) =>{

        const { target : { name, value } } = event;

        if(name === "username"){
            this.setState({username: value})

        }
        if(name === "password"){
            this.setState({password: value})

        }

};


    render () {
        return (
        <div>
            <p> input your name </p>
            <input name="username" type="text" onChange={this.handleInput}/>
            <input name="password" type="text" onChange={this.handleInput}/>
            <Content title ={this.state.username} />
        </div>
    )
}

}

export default Profile;