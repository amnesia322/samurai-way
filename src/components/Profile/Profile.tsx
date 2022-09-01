import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

function Profile() {
    let postData: Array<PostDataType> = [
        {id: 1, message: 'Hi, how are you?', likesCount: 34},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'Nice to meet you!', likesCount: 48}
    ]

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
}

export default Profile