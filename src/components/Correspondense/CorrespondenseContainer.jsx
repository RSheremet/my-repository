import React from 'react';
import correspondense, {addCorrespondenseChangeCreator, addCorrespondenseClickCreator} from "../../Redux/correspondense-reducer";
import Correspondense from "./Correspondense";
import {connect} from 'react-redux'
import authRD from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AuthRedirectComponent} from "../hoc/AuthRedirectComponent";
import {compose} from "redux";


let mapStateToProps = ( state ) => {
    return {
        changeCurrentMessage: state.correspondense.correspondenseChange.changed,
        conversations: state.correspondense.correspondence.conversationData,
        messages: state.correspondense.correspondence.messagesData,
        isAuth: state.authRD.isAuth
    }
};

export default compose (
    connect( mapStateToProps, {addCorrespondenseClickCreator, addCorrespondenseChangeCreator} ),
    AuthRedirectComponent
)(Correspondense);