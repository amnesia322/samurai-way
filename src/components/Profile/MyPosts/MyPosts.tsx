import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {dispatchActionType, PostDataType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profileReducer";


export type MyPostsPropsType = {
    postData: Array<PostDataType>
    newPostText: string
    dispatch: (action: dispatchActionType) => void
}



function MyPosts(props: MyPostsPropsType) {
    //BLL
    const postsElements = props.postData.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)
    const addPost = () => {

        // props.addPost(newPostElement.current.value)
        // props.updateNewPostText('')
        // props.dispatch({type: "ADD-POST", value: newPostElement.current.value})
        let action = addPostAC()
        props.dispatch(action)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(newPostElement.current.value)
        let action = updateNewPostTextAC(e.currentTarget.value)
        props.dispatch(action)
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