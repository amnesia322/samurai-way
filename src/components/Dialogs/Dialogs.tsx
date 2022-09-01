import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsDataType, messagesDataType} from "../../redux/state";

type DialogsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

const Dialogs = (props: DialogsType) => {
    let dialogsElement = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElement = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    //UI
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;