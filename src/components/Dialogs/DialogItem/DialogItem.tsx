import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string,
    id: string
}

const DialogItem = (props: DialogItemType) => {
    return <div className={s.dialog}><NavLink to={'/dialogs/' + props.id} className={s.dialogLink}>{props.name}</NavLink></div>
}



export default DialogItem;