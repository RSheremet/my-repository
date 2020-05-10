import React from 'react';
import style from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {

    return (
    <header className={style.header}>
        <div className={style.imgg}></div>
        <div className={style.login_block}>
            {props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'} className={style.login_word}>Login</NavLink>}
        </div>
    </header>
    )
}

export default Header;