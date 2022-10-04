import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsPageType} from "../../redux/store";


type DialogsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
    state: dialogsPageType
}

const Dialogs = (props: DialogsType) => {
    let dialogsElement = props.state.dialogsData.map(d => <DialogItem
        id={d.id}
        name={d.name}
        img={d.img}/>)
    let messagesElement = props.state.messagesData.map(m => <Message
        message={m.message}
        id={m.id}/>)


    const addMessage = () => {
        props.addMessage()
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    //UI
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea value={props.state.newMessageText} onChange={onChangeMessage}></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;