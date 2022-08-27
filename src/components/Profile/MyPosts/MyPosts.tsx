import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


function MyPosts() {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea className={s.textArea}></textarea>
                <button className={s.buttonAdd}>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likes={15}/>
                <Post message="It's my first post" likes={20}/>
            </div>
        </div>
    );
}

export default MyPosts