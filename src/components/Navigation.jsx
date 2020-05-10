import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";


let menu = `${classes.navMenu} ${classes.navActive}`;

const Navigation = () => {
    return (
    <nav className={classes.nav}>
        <div className={menu}>
            <NavLink to={"/profile/:userID"}>Profile</NavLink>
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
}

export default Navigation;