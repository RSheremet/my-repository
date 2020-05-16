import React from 'react';
import classes from './Navigation.module.css';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserProfileThunkCreatorr} from "../Redux/profile-reducer";


let menu = `${classes.navMenu} ${classes.navActive}`;

class Navigation extends React.Component {

    componentDidMount() {
        this.props.getUserProfileThunkCreatorr(this.props.match.params.userID);
    }

    render() {
        return (
            <nav className={classes.nav}>
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
    }
}

const mapStateToProps = ( state ) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreatorr}),
    withRouter
)(Navigation);