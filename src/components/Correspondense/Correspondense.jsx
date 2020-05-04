import React from 'react';
import style from './Correspondense.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addCorrespondenseChangeCreator, addCorrespondenseClickCreator} from "../../Redux/correspondense-reducer";
import {connect} from 'react-redux'

const Correspondense = (props) => {

    let Dialogs = props.conversations.map( d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    let Messages = props.messages.map( m => <Message message={m.message} id={m.id} key={m.id} /> );

    let dynamicChange = (e) => {
        let changeValue = e.target.value
        props.dynamicChangee( changeValue )
    }

    return (
        <div className={style.correspondense}>
           <div className={style.wrapper}>
               {Dialogs}
           </div>
           <div className={style.messages}>
               <div className={style.messages_wrapper}>
                    {Messages}
               </div>
               <div className={style.toWriteMessageTextareaButton}>
                   <textarea value={ props.changeCurrentMessage } onChange={dynamicChange}></textarea>
                   <button onClick={ props.addMessage }>Отправить</button>
               </div>
           </div>
        </div>
    )
}

export default Correspondense;