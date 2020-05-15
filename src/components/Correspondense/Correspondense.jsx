import React from 'react';
import style from './Correspondense.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import TextareaDialog from "./DialogTextareaForm/DialogTextareaForm";
import {addCorrespondenseClickCreator} from "../../Redux/correspondense-reducer";

const Correspondense = (props) => {

    let Dialogs = props.conversations.map( d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    let Messages = props.messages.map( m => <Message message={m.message} id={m.id} key={m.id} /> );

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
                   <TextareaDialog addCorrespondenseClickCreator={props.addCorrespondenseClickCreator} />
               </div>
           </div>
        </div>
    )
}

export default Correspondense;