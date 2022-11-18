import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

export function Header(props: HeaderPropsType) {


    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='header-logo'/>
            <h1>Society</h1>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    );
}

export default Header
