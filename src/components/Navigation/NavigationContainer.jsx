import React from 'react';
import classes from '../../App.module.css';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserProfileThunkCreatorr} from "../../Redux/profile-reducer";
import Navigation from "./Navigation";


let menu = `${classes.navMenu} ${classes.navActive}`;

class NavigationContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileThunkCreatorr(this.props.match.params.userID);
    }

    render() {
        return (
            <Navigation />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {

    }
};

export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreatorr}),
    withRouter
)(NavigationContainer);