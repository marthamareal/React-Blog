import React from 'react'
import profile from "./static/profile.jpg";
class Profile extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username : "",
            password: ''
        }
    }


    render () {
        return (
        <div className="profile-blog">
                    <div className="row ">
                        <div className="col s2">
                            <img src={profile} alt="" className="square responsive-img" />
                        </div>
                        <h5>Martha Mareal</h5>
                        <div className="col s10">
                            showman’s powers of persuasion and self-invention have proven grotesquely effective.
                            In short, Trump structured a life around the unethical attainment
                        </div>
                    </div>
             </div>

    )
}

}

export default Profile;