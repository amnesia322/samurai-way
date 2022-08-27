import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    return <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name='Dimych'/>
                <DialogItem id={2} name='Daniil'/>
                <DialogItem id={3} name='Rogoz'/>
                <DialogItem id={4} name='Vitaliy'/>
                <DialogItem id={5} name='Ivan'/>
                <DialogItem id={6} name='Valera'/>
            </div>
            <div className={s.messages}>
                <Message message='hi' />
                <Message message='how are u?' />
                <Message message='crazy project!' />
                <Message message='vozmite menya rabotat)' />
            </div>
        </div>
    )
}

export default Dialogs;