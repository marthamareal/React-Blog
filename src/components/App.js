import React from 'react';

import '../styles/styles.scss';

import Header from './Header'
import Footer from './Footer'
import Content from "./Blog/Content";
import * as axios from "axios";

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {article:"dsdsdscdsc"};
        this.getArticle = this.getArticle.bind(this);

    }

    componentDidMount(){
        this.getArticle();
    }

    getArticle = () => {
        const url = 'https://reqres.in/api/users/2';
        const headers = {
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9." +
                "eyJpZCI6OCwidXNlcm5hbWUiOiJNYXJ0aGFWYWtpc2giLCJleHAiOjE1MzgyMzQzNjF9." +
                "v7RaexxBZRIOwibsbiGQPAnTF4zKhKKdP6L3Nt4Gtns"
        };

        axios.get(url, {headers: headers})
            .then( (response) => {
            // console.log(response.data.data)
                this.setState({article: response.data.data})
            })
            .catch(function (error) {
                console.log(error)
            })

  }

    render () {

        return (
            <div className="App">
                <Header />

                <Content title="HOW TO TRAIN A DRAGON" body={this.state.article} />
                <Content title="HOW TO TRAIN A DRAGON" body={{ first_name: 'martha'}} />

                <Footer />
            </div>
        )
    }

}

export default App;