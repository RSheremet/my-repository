import React from 'react';
import style from '../../App.module.css';
import {NavLink} from "react-router-dom";
import UserPhoto from "../Common/UserPhoto/UserPhoto";

const Header = (props) => {

    return (
    <header className={style.header}>
        <div className={style.container}>
            <div className={style.isLogin_wrapper}>
                <div className={style.imgg}></div>
                <div className={style.login_block}>
                    {props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'} className={style.login_word}>Войти</NavLink>}
                    <div className={style.header_photo}>
                        {props.isInitialized && UserPhoto(props.singleProfile.photos.large) }
                    </div>
                    {props.isAuth ? <button onClick={props.toLogout}>Выйти</button> : ""}
                </div>
            </div>
        </div>
    </header>
    )
};

export default Header;