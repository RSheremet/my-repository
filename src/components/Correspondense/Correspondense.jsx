import React from 'react';
import c from './Correspondense.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Correspondense = (props) => {

    let Dialogs = props.converstations.map( d => <DialogItem name={d.name} id={d.id} /> );
    let Messages = props.messages.map( m => <Message message={m.message} id={m.id} /> );

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