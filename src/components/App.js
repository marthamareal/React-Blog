import React from 'react';

import '../styles/styles.scss';

import Header from './Header'
import Footer from './Footer'
import Content from "./Blog/Content";

const App =()=>  {
    return (
        <div className="App">
            <Header />

             <Content />

            <Footer />
        </div>
    )
};

export default App;