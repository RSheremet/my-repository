import React from 'react';
import style from '../../App.module.css';
import {NavLink} from "react-router-dom";
import {compose} from "redux";


const Navigation = ( props ) => {

        let menu = style.menu;

        return (

            <nav className={style.nav}>
                <div className={menu}>
                    <NavLink to={"/profile/7398"}>Profile</NavLink>
                </div>
                <div className={menu}>
                    <NavLink to={"/correspondense"}>Messages</NavLink>
                </div>
                <div className={menu}>
                    <NavLink to="/users">Users</NavLink>
                </div>
                <div className={menu}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={menu}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={menu}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
                <div className={menu}>
                    <NavLink to="/friendsList">FriendsList</NavLink>
                </div>
            </nav>

        )
};



export default compose()(Navigation);