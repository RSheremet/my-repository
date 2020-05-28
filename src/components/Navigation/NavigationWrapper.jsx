import React from 'react';
import style from '../../App.module.css';
import {compose} from "redux";
import Navigation from "./Navigation";
import UserPhoto from "../Common/UserPhoto/UserPhoto";


const NavigationWrapper = ( props ) => {

        let login = <span>{props.login}</span>

        return (

            <nav className={style.nav_wrapper}>
                { props.isInitialized && UserPhoto(props.profile.photos.large) }
                { props.isInitialized && login }
                <Navigation />
            </nav>

        )
};



export default compose()(NavigationWrapper);