import React from 'react';
import c from '../../../App.module.css';

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

export default Message