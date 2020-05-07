import React from 'react';
import classes from './Navigation.module.css';


let menu = `${classes.navMenu} ${classes.navActive}`;

const Navigation = () => {
    return (
    <nav className={classes.nav}>
        <div className={menu}>
            <a href="/profile/:userID">Profile</a>
        </div>
        <div className={menu}>
            <a href="/correspondense">Messages</a>
        </div>
        <div className={menu}>
            <a href="/users">Users</a>
        </div>
        <div className={menu}>
            <a href="/news">News</a>
        </div>
        <div className={menu}>
            <a href="/music">Music</a>
        </div>
        <div className={menu}>
            <a href="/settings">Settings</a>
        </div>
        <div className={menu}>
            <a href="/friendsList">FriendsList</a>
        </div>
    </nav>
    )
}

export default Navigation;