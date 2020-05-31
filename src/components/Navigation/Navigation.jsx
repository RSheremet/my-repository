import React from 'react';
import style from '../../App.module.css';
import {NavLink} from "react-router-dom";
import {compose} from "redux";


const Navigation = ( props ) => {

        let menu = style.menu;
        let menuActive = style.menuActive;

        let changeChoosePoint = ( id ) => {
            props.changeChosenPoint( id )
        };

        return (

            <nav className={style.nav}>
                { props.points.map( p =>
                    <div className={ p.id === props.chosenPoint ? menuActive : menu } key={p.id} onClick={() => {changeChoosePoint(p.id)}}>
                        <NavLink to={p.link}>{p.name}</NavLink>
                    </div>
                ) }
            </nav>



                /*<div className={menu}> // П Р И М Е Р
                    <NavLink to={"/profile/7398"}>Профиль</NavLink> // П Р И М Е Р
                </div> // П Р И М Е Р
                <div className={menu}> // П Р И М Е Р
                    <NavLink to={"/correspondense"}>Messages</NavLink> // П Р И М Е Р
                </div> // П Р И М Е Р
                <div className={menu}> // П Р И М Е Р
                    <NavLink to="/users">Пользователи</NavLink> // П Р И М Е Р
                </div> // П Р И М Е Р
                <div className={menu}> // П Р И М Е Р
                    <NavLink to="/news">Новости</NavLink> // П Р И М Е Р
                </div> // П Р И М Е Р
                <div className={menu}> // П Р И М Е Р
                    <NavLink to="/music">Музыка</NavLink> // П Р И М Е Р
                </div> // П Р И М Е Р
                <div className={menu}> // П Р И М Е Р
                    <NavLink to="/settings">Настройки</NavLink> // П Р И М Е Р
                </div> // П Р И М Е Р
                <div className={menu}> // П Р И М Е Р
                    <NavLink to="/friendsList">Список друзей</NavLink> // П Р И М Е Р
                </div>*/ // П Р И М Е Р


        )
};



export default compose()(Navigation);