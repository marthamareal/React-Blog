import React from 'react';


import '../styles/styles.scss';
import HomeImg from "./Blog/static/article.jpg";

import Header from './Header'
import Footer from './Footer'
import Content from "./Blog/Content";
import {Route} from "react-router-dom";

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {article: "dsdsdscdsc"};
    }


    render () {

        return (
            <div className="App">

                <Header />

                    <Route exact path='/' component={this.Home}/>
                    <Route path='/blog' component={Content}/>
                    <Route path='/about' component={this.About}/>

                <Footer />
            </div>
        )
    }

    Home = () =>{

        return (
            <div>
                <img src={HomeImg} alt="..." className="responsive-img"/>
            </div>

        )

    };

    About = () =>{

        return (
            <div>
                <p>This is  about page</p>
            </div>

        )

    };

}

export default App;