import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";

class Content extends React.Component {
    constructor(){
        super();
        this.state = {article: "dsdsdscdsc"};

        this.getArticle = this.getArticle.bind(this);
    }

    componentDidMount(){
        console.log("getting article");
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

                this.setState({article: response.data.data});
                console.log(this.state.article)
            })
            .catch(function (error) {
                console.log(error)
            })

  };

    render() {
        return (
            <div className="blog container" style={{border: '1px solid red'}}>

            <div className="profile">
                <Profile/>
            </div>


            <div className="blog-content">

                <h4>How To Train A Dragon in Sahara</h4>
                <img src={this.state.article.avatar} alt="..."/>

            </div>
        </div>
        );
    }

}
export default Content;