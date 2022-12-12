import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/reducers/profileReducer";


export type ProfilePropsType = {
    profile: UserProfileType
    status: string | null
    updateStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile