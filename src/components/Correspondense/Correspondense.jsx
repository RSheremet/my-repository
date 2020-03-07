import React from 'react';
import c from './Correspondense.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Correspondense = (props) => {

    let conversationData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vitek'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
    ]

    let messagesData = [
        {id: 1, message: "how is your it-kamasutra"},
        {id: 2, message: "why"},
        {id: 3, message: "yo"},
    ]

    let Dialogs = conversationData.map( d => <DialogItem name={d.name} id={d.id} /> );
    let Messages = messagesData.map( m => <Message message={m.message} id={m.id} /> )

    return (
        <div className={c.correspondense}>
           <div className={c.wrapper}>
               {Dialogs}
           </div>
           <div className={c.messages}>
               {Messages}
           </div>
        </div>
    )
}

export default Correspondense;