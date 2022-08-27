import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number
}

type MessageType = {
    id: number
    message: string
}

type dialogsDataType = {
    id: number,
    name: string
}

type messagesDadaType = {
    id: number,
    message: string
}

const DialogItem = (props: DialogItemType) => {
    return <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
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

    let messagesDada: Array<messagesDadaType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are u?'},
        {id: 3, message: 'crazy project!'},
        {id: 4, message: 'vozmite menya rabotat)'},
    ]

    //UI
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map( d => {
                    return  <DialogItem id={d.id} name={d.name}/>
                })}
            </div>
            <div className={s.messages}>
                {messagesDada.map( m => {
                    return <Message message={m.message} id={m.id}/>
                })}
            </div>
        </div>
    )
}

export default Dialogs;