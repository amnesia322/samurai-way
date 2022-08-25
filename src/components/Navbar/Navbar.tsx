import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {

    return (
        <nav className={s.nav}>
            <NavLink to='/profile' className={s.item} activeClassName={s.active}>Profile</NavLink>
            <NavLink to='/dialogs' className={s.item} activeClassName={s.active}>Message</NavLink>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>News</a>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>Music</a>
            <a href='src/components/Navbar/Navbar#a' className={`${s.item} ${s.settings}`}>Settings</a>
        </nav>
    )
        ;
}

export default Navbar