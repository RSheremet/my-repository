import React from 'react';
import correspondense, {addCorrespondenseChangeCreator, addCorrespondenseClickCreator} from "../../Redux/correspondense-reducer";
import Correspondense from "./Correspondense";
import {connect} from 'react-redux'


let mapStateToProps = ( state ) => {
    return {
        changeCurrentMessage: state.correspondense.correspondenseChange.changed,
        conversations: state.correspondense.correspondence.conversationData,
        messages: state.correspondense.correspondence.messagesData
    }
}

let mapDispatchToProps = ( dispatch ) => {
    return {

        addMessage: () => {
            dispatch( addCorrespondenseClickCreator() )
        },

        dynamicChange: (changeValue) => {
            let body = addCorrespondenseChangeCreator(changeValue)
            dispatch({...body})
        }

    }
}

const CorrespondenseContainer = connect( mapStateToProps, mapDispatchToProps )( Correspondense )


export default CorrespondenseContainer;