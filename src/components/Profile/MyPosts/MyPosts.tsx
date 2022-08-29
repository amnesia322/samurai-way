import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}


function MyPosts() {
    //BLL
    let postData: Array<PostDataType> = [
        {id: 1, message: 'Hi, how are you?', likesCount: 34},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'Nice to meet you!', likesCount: 48}
    ]
    const postsElements = postData.map(p => <Post message={p.message} likes={p.likesCount} key={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea className={s.textArea}></textarea>
                <button className={s.buttonAdd}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts