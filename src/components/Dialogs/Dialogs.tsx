import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, AddMessageFormType} from "./AddMessageForm/AddMessageForm";


const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogItem
        id={d.id}
        name={d.name}
        img={d.img}/>)
    let messagesElement = props.dialogsPage.messagesData.map(m => <Message
        message={m.message}
        id={m.id}/>)

    const addNewMessage = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageBody)
    }

    //UI
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}


export default Dialogs;