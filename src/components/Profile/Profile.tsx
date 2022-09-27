import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {dispatchActionType, profilePageType} from "../../redux/state";



type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: dispatchActionType) => void
}

function Profile (props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
        </div>
    );
}

export default Profile