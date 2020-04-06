import React from 'react';
import c from './Correspondense.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addCorrespondenseChangeCreator, addCorrespondenseClickCreator} from "../../Redux/correspondense-reducer";

const Correspondense = (props) => {

    let Dialogs = props.converstations.map( d => <DialogItem name={d.name} id={d.id} /> );
    let Messages = props.messages.map( m => <Message message={m.message} id={m.id} /> );
    let changeCurrentMessage = props.correspondenseChange

    let addMessage = () => {
        props.dispatch( addCorrespondenseClickCreator() )
    }

    let dynamicChange = (e) => {
        let changeValue = e.target.value
        let body = addCorrespondenseChangeCreator(changeValue)
        props.dispatch({...body})
    }

    return (
        <div className={c.correspondense}>
           <div className={c.wrapper}>
               {Dialogs}
           </div>
           <div className={c.messages}>
               <div className={c.messages_wrapper}>
                    {Messages}
               </div>
               <div className={c.toWriteMessageTextareaButton}>
                   <textarea value={changeCurrentMessage} onChange={dynamicChange}></textarea>
                   <button onClick={addMessage}>Отправить</button>
               </div>
           </div>
        </div>
    )
}

export default Correspondense;