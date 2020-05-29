import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {toLogout} from "../../Redux/auth-reducer";
import {getSingleProfile} from "../../Redux/profile-selectors";
import {getIsInitialized} from "../../Redux/auth-selectors";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header
                {...this.props}
                singleProfile={this.props.singleProfile}
                isInitialized={this.props.isInitialized}
            />
        )
    }


}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authRD.isAuth,
        login: state.authRD.login,
        isInitialized: getIsInitialized(state),
        singleProfile: getSingleProfile(state)
    }
}

export default connect(mapStateToProps, {toLogout})(HeaderContainer);