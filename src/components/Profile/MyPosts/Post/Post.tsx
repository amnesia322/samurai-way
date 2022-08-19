import React from "react";
import s from "./Post.module.css"


function Post() {

    return (
        <div className={s.item}>
            <img src="https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png"
                 alt="avatar user"/> post1
        </div>
    );
}

export default Post