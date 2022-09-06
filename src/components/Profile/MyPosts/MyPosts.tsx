import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/state";


export type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: (message: string) => void
}


function MyPosts(props: MyPostsPropsType) {
    //BLL
    const postsElements = props.postData.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)
    const newPostElement: any = React.createRef()
    const addPost = () => {
        props.addPost(newPostElement.current.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} className={s.textArea}></textarea>
                <button onClick={addPost} className={s.buttonAdd}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts