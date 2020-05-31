import React from 'react';
import style from '../../App.module.css';
import {compose} from "redux";
import Navigation from "./Navigation";
import UserPhoto from "../Common/UserPhoto/UserPhoto";


const NavigationWrapper = ( props ) => {

        let login = <span>{props.login}</span>;

        return (

            <nav className={style.nav_wrapper}>
                { props.isInitialized && UserPhoto(props.profile.photos.large) }
                <div className={style.nickname}>
                        { props.isInitialized && login }
                        <div className={style.check_mark}></div>
                </div>
                <Navigation
                    points={ props.points }
                    chosenPoint={ props.chosenPoint }
                    changeChosenPoint={ props.changeChosenPoint }
                />
            </nav>

        )
};



export default compose()(NavigationWrapper);