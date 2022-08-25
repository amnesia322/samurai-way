import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}><NavLink to='/dialogs/1'>Vasya</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>Rogoz</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>Berya</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>Ivan</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how ary u?</div>
                <div className={s.message}>vot eto project!</div>
            </div>
        </div>
    )
}

export default Dialogs;