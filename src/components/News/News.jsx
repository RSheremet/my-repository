import React from 'react';
import style from "../../App.module.css"
import {Redirect} from "react-router-dom";


const News = (props) => {

    return (
        <div className={style.newsWrapper}>
            <div>Новости</div>
            <div className={style.string}></div>

        </div>
    )
}

export default News;