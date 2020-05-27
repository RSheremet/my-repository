import React from 'react';
import classes from '../../App.module.css';
import {Redirect} from "react-router-dom";

const Settings = (props) => {

    if (props.store.getState().authRD.isAuth == false) return <Redirect to={'/login'} />;

    return (
        <div>
            Здесь будут настройки страницы
        </div>
    )
}

export default Settings;