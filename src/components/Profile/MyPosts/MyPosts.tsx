import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {dispatchActionType, PostDataType} from "../../../redux/state";


export type MyPostsPropsType = {
    postData: Array<PostDataType>
    newPostText: string
    dispatch: (action: dispatchActionType) => void
}


function MyPosts(props: MyPostsPropsType) {
    //BLL
    const postsElements = props.postData.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)
    const newPostElement: any = React.createRef()
    const addPost = () => {
        // props.addPost(newPostElement.current.value)
        // props.updateNewPostText('')
        props.dispatch({type: "ADD-POST", value: newPostElement.current.value})

    }
    const onPostChange = () => {
        //props.updateNewPostText(newPostElement.current.value)
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", value: newPostElement.current.value})
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={s.textArea}/>
                <button onClick={addPost} className={s.buttonAdd}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts