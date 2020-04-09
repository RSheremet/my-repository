import React from 'react';
import correspondense, {addCorrespondenseChangeCreator, addCorrespondenseClickCreator} from "../../Redux/correspondense-reducer";
import Correspondense from "./Correspondense";
import StoreContext from "../reactContext";

const CorrespondenseContainer = (props) => {

    /*let state = props.store.getState()*/

       return <StoreContext.Consumer>
            { store => {

        let changeCurrentMessage = store.getState().correspondense.correspondenseChange.changed

        let addMessage = () => {
            store.dispatch( addCorrespondenseClickCreator() )
        }

        let dynamicChange = (changeValue) => {
            let body = addCorrespondenseChangeCreator(changeValue)
            store.dispatch({...body})
        }

        return (<Correspondense
            onDynamicChange={dynamicChange}
            onChangeCurrentMessage={changeCurrentMessage}
            onAddMessage={addMessage}
            conversations={store.getState().correspondense.correspondence.conversationData}
            messages={store.getState().correspondense.correspondence.messagesData}
        />)
          }
        }
       </StoreContext.Consumer>
    }


export default CorrespondenseContainer;