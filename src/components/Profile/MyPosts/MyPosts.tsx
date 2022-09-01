import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/state";


export type MyPostsPropsType = {
    postData: Array<PostDataType>
}


function MyPosts(props: MyPostsPropsType) {
    //BLL
    const postsElements = props.postData.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea className={s.textArea} value='aslsss'></textarea>
                <button className={s.buttonAdd}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts