import React from 'react';
import classes from '../../App.module.css';
import {connect} from "react-redux";
import {compose} from "redux";
import NavigationWrapper from "./NavigationWrapper";
import {toCheckInitializationForProfile} from "../../Redux/auth-reducer";
import {withRouter} from "react-router-dom";


let menu = `${classes.navMenu} ${classes.navActive}`;

class NavigationContainer extends React.Component {

    toReloadComponent = () => {
        let userId = this.props.match.params.userID;
        this.props.toCheckInitializationForProfile( userId );

    };

    componentDidMount() {
        this.toReloadComponent();
    }

    componentDidUpdate() {
        this.toReloadComponent();
    }



    render() {

        return (
            <NavigationWrapper
                profile={this.props.profile}
                isInitialized={this.props.isInitialized}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        profile: state.profileRD.profile.singleProfile,
        isInitialized: state.authRD.isInitialized
    }
};

export default compose(
    connect(mapStateToProps, {toCheckInitializationForProfile}),
    withRouter
)(NavigationContainer);