import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {AddPostFormRedux, AddPostFormType} from "./AddPostForm/AddPostForm";


function MyPosts(props: MyPostPropsType) {
    //BLL
    const postsElements = props.postData.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)

    const addNewPost = (values: AddPostFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts