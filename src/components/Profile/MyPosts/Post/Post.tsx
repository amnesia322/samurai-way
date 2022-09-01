import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string;
    likes: number
}

function Post(props: PostPropsType) {

    return (
        <div className={s.item}>
            <img src="https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png"
                 alt="avatar user"/>
            <div className={s.message}>
                <p className={s.textMessage}>{props.message}</p>  <span>{props.likes}</span></div>
        </div>
    );
}

export default Post