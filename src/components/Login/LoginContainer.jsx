import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import authRD, {toAuthUserDataThunkCreator} from "../../Redux/auth-reducer";
import {withRouter} from "react-router-dom";


class LoginContainer extends React.Component {

    render() {
        return (
            <Login toAuthUserDataThunkCreator={this.props.toAuthUserDataThunkCreator}
                   isAuth={this.props.isAuth}
            />
        )
    }



};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authRD.isAuth
    }
};

export default compose(
    connect( mapStateToProps, {toAuthUserDataThunkCreator} ),
    withRouter
)(LoginContainer);