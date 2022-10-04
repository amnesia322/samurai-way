import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {dispatchActionType, PostDataType} from "../../../redux/store";


export type MyPostsPropsType = {
    postData: Array<PostDataType>
    newPostText: string
    dispatch: (action: dispatchActionType) => void
    addPost: () => void
    updateNewPostText: (text: string) => void
}



function MyPosts(props: MyPostsPropsType) {
    //BLL
    const postsElements = props.postData.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)
    const addPost = () => {
         props.addPost()
         props.updateNewPostText('')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} className={s.textArea}/>
                <button onClick={addPost} className={s.buttonAdd}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts