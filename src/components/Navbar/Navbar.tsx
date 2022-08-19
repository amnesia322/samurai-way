import React from "react";
import s from "./Navbar.module.css"

function Navbar() {

    return (
        <nav className={s.nav}>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>Profile</a>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>Message</a>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>News</a>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>Music</a>
            <a href='src/components/Navbar/Navbar#a' className={`${s.item} ${s.settings}`}>Settings</a>
        </nav>
    )
        ;
}

export default Navbar