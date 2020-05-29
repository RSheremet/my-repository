import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import NavigationWrapper from "./NavigationWrapper";
import {toCheckInitializationForProfile} from "../../Redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {getSingleProfile} from "../../Redux/profile-selectors";
import {getIsInitialized, getLogin, getUserId} from "../../Redux/auth-selectors";


class NavigationContainer extends React.Component {

    render() {

        return (
            <NavigationWrapper
                profile={this.props.profile}
                isInitialized={this.props.isInitialized}
                login={this.props.login}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        profile: getSingleProfile(state),
        isInitialized: getIsInitialized(state),
        userId: getUserId(state),
        login: getLogin(state)
    }
};

export default compose(
    connect(mapStateToProps, {toCheckInitializationForProfile}),
    withRouter
)(NavigationContainer);