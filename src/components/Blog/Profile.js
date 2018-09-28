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
        console.log(profile);
        return (
        <div className="profile-image">
            <img src={profile} alt="..." />
            <p>UserName: User</p>
        </div>
    )
}

}

export default Profile;