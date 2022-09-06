import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsDataType, messagesDataType} from "../../redux/state";

type DialogsStateType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

type DialogsType = {
    state: DialogsStateType
}

const Dialogs = (props: DialogsType) => {
    let dialogsElement = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>)
    let messagesElement = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    const newMessageElement: any = React.createRef()
    const addMessage = () => {
        alert(newMessageElement.current.value)
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
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;