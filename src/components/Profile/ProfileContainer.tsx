import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addPostAC, profilePageType, setUserProfileAC, updateNewPostTextAC} from "../../redux/reducers/profileReducer";



class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/26725`)
            .then(res => {
                this.props.setUserProfile(res.data)
                debugger
            })


    }

    render () {
       return <Profile profile={this.props.profile}/>

    };

}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {addPostAC, updateNewPostTextAC, setUserProfileAC}) (ProfileContainer)