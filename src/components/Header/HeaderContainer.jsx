import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import authRD, {setAuthUserDataThunkCreator} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserDataThunkCreator()
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => { // П Р И М Е Р
            let { id, login, email} = response.data.data; // П Р И М Е Р
            this.props.setAuthUserData(id, login, email); // П Р И М Е Р
        });*/ // П Р И М Е Р
    }


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

export default connect(mapStateToProps, {setAuthUserDataThunkCreator})(HeaderContainer);