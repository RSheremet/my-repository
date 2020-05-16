import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import authRD, {toLogout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }


}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authRD.isAuth,
        login: state.authRD.login
    }
}

export default connect(mapStateToProps, {toLogout})(HeaderContainer);