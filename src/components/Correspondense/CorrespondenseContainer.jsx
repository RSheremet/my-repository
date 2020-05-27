import React from 'react';
import correspondense, {addCorrespondenseClickCreator} from "../../Redux/correspondense-reducer";
import Correspondense from "./Correspondense";
import {connect} from 'react-redux';
import {AuthRedirectComponent} from "../hoc/AuthRedirectComponent";
import {compose} from "redux";


let mapStateToProps = ( state ) => {
    return {
        conversations: state.correspondense.correspondence.conversationData,
        messages: state.correspondense.correspondence.messagesData,
        isAuth: state.authRD.isAuth
    }
};

export default compose (
    connect( mapStateToProps, {addCorrespondenseClickCreator} ),
    AuthRedirectComponent
)(Correspondense);