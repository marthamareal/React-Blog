import React from 'react';


import Header from './Header'
import Footer from './Footer'
import Profile from "./Blog/Profile";
import Content from "./Blog/Content";

const App =()=>  {
    return (
        <div className="App">
            <Header />

             <Profile />
            <Footer />
        </div>
    )
};

export default App;