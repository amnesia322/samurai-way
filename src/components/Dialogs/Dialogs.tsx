import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


type dialogsDataType = {
    id: number,
    name: string
}

type messagesDataType = {
    id: number,
    message: string
}


const Dialogs = () => {
    //BLL
    let dialogsData: Array<dialogsDataType> = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Daniil'},
        {id: 3, name: 'Rogoz'},
        {id: 4, name: 'Vitaliy'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Valera'},
    ]
    let dialogsElement = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesData: Array<messagesDataType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are u?'},
        {id: 3, message: 'crazy project!'},
        {id: 4, message: 'vozmite menya rabotat)'},
    ]
    let messagesElement = messagesData.map(m => <Message message={m.message} id={m.id}/>)

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