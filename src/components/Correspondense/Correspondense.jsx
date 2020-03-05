import React from 'react';
import c from './Correspondense.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/Correspondense/" + props.id
    return (
        <div className={c.item + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

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

    return (
        <div className={c.correspondense}>
           <div className={c.wrapper}>
               <Dialog name={conversationData[0].name} id={conversationData[0].id} />
               <Dialog name={conversationData[1].name} id={conversationData[1].id} />
               <Dialog name={conversationData[2].name} id={conversationData[2].id} />
               <Dialog name={conversationData[3].name} id={conversationData[3].id} />
           </div>
           <div className={c.messages}>
               <Message message={messagesData[0].message} id={messagesData[0].id} />
               <Message message={messagesData[1].message} id={messagesData[1].id} />
               <Message message={messagesData[2].message} id={messagesData[2].id} />
           </div>
        </div>
    )
}

export default Correspondense;