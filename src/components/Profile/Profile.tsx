import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Store} from "redux";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/store";



type ProfilePropsType = {
    store: Store<RootStateType>
}

function Profile (props: ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
            {/*<MyPosts postData={props.profilePage.postData}
            dispatch={props.dispatch}
            newPostText={props.profilePage.newPostText}/>*/}
        </div>
    );
}

export default Profile