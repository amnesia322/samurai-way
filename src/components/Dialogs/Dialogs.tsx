import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    addMessageAC,
     dialogsPageType,
    dispatchActionType,
    updateNewMessageTextAC
} from "../../redux/state";



type DialogsType = {
    state: dialogsPageType
    dispatch: (action: dispatchActionType) => void
}

const Dialogs = (props: DialogsType) => {
    let dialogsElement = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>)
    let messagesElement = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    const newMessageElement: any = React.createRef()
    const addMessage = () => {
        let action = addMessageAC(newMessageElement.current.value)
        props.dispatch(action)
    }
    const onChangeMessage = () => {
        let action = updateNewMessageTextAC(newMessageElement.current.value)
        props.dispatch(action)
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
                    <textarea ref={newMessageElement} value={props.state.newMessageText} onChange={onChangeMessage}></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;