import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export type NavbarPropsType = {
    state: any
}

function Navbar(props: NavbarPropsType) {

    return (
        <nav className={s.nav}>
            <NavLink to='/profile' className={s.item} activeClassName={s.active}>Profile</NavLink>
            <NavLink to='/dialogs' className={s.item} activeClassName={s.active}>Message</NavLink>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>News</a>
            <a href='src/components/Navbar/Navbar#a' className={s.item}>Music</a>
            <a href='src/components/Navbar/Navbar#a' className={`${s.item} ${s.settings}`}>Settings</a>
            <NavLink to='/friends' className={s.item} activeClassName={s.active}>Friends</NavLink>
            <div className={s.friends}>
                <div className={s.friend}>
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt=""
                         className={s.avatar}/>
                    <NavLink to={'/dialogs/91a468c3-2df2-11ed-a24a-39ab2ad97c81'} className={s.dialogLink}>Dymich</NavLink>
                </div>
                <div className={s.friend}>
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt=""
                         className={s.avatar}/>
                    <NavLink to={'/dialogs/91a468c3-2df2-11ed-a24a-39ab2ad97c81'} className={s.dialogLink}>Dymich</NavLink>
                </div>
                <div className={s.friend}>
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt=""
                         className={s.avatar}/>
                    <NavLink to={'/dialogs/91a468c3-2df2-11ed-a24a-39ab2ad97c81'} className={s.dialogLink}>Dymich</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar