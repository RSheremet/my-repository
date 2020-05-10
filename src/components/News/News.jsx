import React from 'react';
import classes from './News.module.css';
import {Redirect} from "react-router-dom";
import authRD from "../../Redux/auth-reducer";

const News = (props) => {

    if (props.store.getState().authRD.isAuth == false) return <Redirect to={'/login'} />;

    return (
        <div>
            Здесь будут новости
        </div>
    )
}

export default News;