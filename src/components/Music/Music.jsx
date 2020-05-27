import React from 'react';
import classes from '../../App.module.css';
import {Redirect} from "react-router-dom";

const Music = (props) => {

    if (props.store.getState().authRD.isAuth == false) return <Redirect to={'/login'} />;

    return (
        <div>
            Здесь будут новости
        </div>
    )
}

export default Music;