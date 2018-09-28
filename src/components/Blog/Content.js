import React from 'react'
import Profile from "./Profile";

const Content = (props) => {
    console.log('>>>>>', props.body);

    return <div className="blog container" style={{border: '1px solid red'}}>

        <div className="profile">
            <Profile/>
        </div>


        <div className="blog-content">
            <h4>{props.title}</h4>
            {/*<h4>How To Train A Dragon in Sahara</h4>*/}
            <img src={props.body.avatar} />
            <p>{props.body.first_name}</p>

        </div>
    </div>

};
export default Content;