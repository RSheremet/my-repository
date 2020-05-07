import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import authRD, {setAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            let { id, login, email} = response.data.data;
            this.props.setAuthUserData(id, login, email);
        });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);