import React from 'react';
import classes from './Navigation.module.css';


let menu = `${classes.navMenu} ${classes.navActive}`;

const Navigation = () => {
    return (
    <nav className={classes.nav}>
        <div className={menu}>
            <a>Profile</a>
        </div>
        <div className={menu}>
            <a>Messages</a>
        </div>
        <div className={menu}>
            <a>News</a>
        </div>
        <div className={menu}>
            <a>Music</a>
        </div>
    </nav>
    )
}

export default Navigation;