import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import authRD, {toAuthUserDataThunkCreator} from "../../Redux/auth-reducer";


const LoginContainer = (props) => {

    return (
        <Login toAuthUserDataThunkCreator={props.toAuthUserDataThunkCreator}  />
    )

};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authRD.isAuth
    }
};

export default compose(
    connect( mapStateToProps, {toAuthUserDataThunkCreator} ),
)(LoginContainer);