import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

type ProfileStateType = {
    postData: Array<PostDataType>
}

type ProfilePropsType = {
    state: ProfileStateType
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    );
}

export default Profile