import React from "react";
import s from "./Header.module.css"

export function Header() {

    return (
    <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='header-logo'/>
        <h1>Society</h1>
    </header>

    );
}

export default Header
