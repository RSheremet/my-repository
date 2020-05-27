import React from 'react';
import c from '../../../App.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Correspondense/" + props.id
    return (
        <div className={c.item + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;