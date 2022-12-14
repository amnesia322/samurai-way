import React from "react";
import s from './../Dialogs.module.css'


export type MessageType = {
    id: string
    message: string
}

const Message = (props: MessageType) => {
    return <div className={s.message} key={props.id}>{props.message}</div>
}


export default Message;