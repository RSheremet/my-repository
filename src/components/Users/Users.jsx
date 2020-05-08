import React from "react";
import style from "./Users.module.css";
import Photo from "../../images/logo.jpg"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toFollow, toUnFollow} from "../../Redux/users-reducer";
import {usersAPI} from "../API/API";


const Users = ( props ) =>  {

        return (
            <div>
                <div>
                    { props.pages.map( p => {
                        if (props.currentPage === p) {
                            return <span className={ style.selectedPage }>{p}</span>
                        } else {
                            return <span className={style.unselected_page} onClick={ () => { props.onChangePage(p) } }>{p}</span>
                        }
                    })}

                </div>
                {props.users.map(u =>
                    <div key={u.id} className={`${style.wrapper} ${style.user}`}>
                        <div className={style.breakdown}>
                            <NavLink to={'/Profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : Photo} className={style.user_photo} />
                            </NavLink>
                            <div className={style.user_name}>{u.name}</div>
                            {u.followed === true ?
                                <button disabled={props.isButtonPressed.some( id => id === u.id)} onClick={ () => {

                                 props.setButtonPressed( true, u.id );
                                 usersAPI.toUnFollowRequest( u.id ).then(data => {
                                    if (data.resultCode == 0) {
                                        props.toUnFollow(u.id);
                                        props.setButtonPressed( false, u.id );
                                    }
                                })} }
                                    >Unfollow</button>

                                :
                                <button disabled={props.isButtonPressed.some( id => id === u.id)} onClick={ () => {

                                    props.setButtonPressed( true, u.id );
                                    usersAPI.toFollowRequest( u.id ).then(data => {
                                    if (data.resultCode == 0) {
                                        props.toFollow(u.id);
                                        props.setButtonPressed( false, u.id );
                                    }
                                })} }>Follow</button>}
                        </div>
                        {/*<div className={style.breakdown}>
                            <div className={style.country}>{u.adress.country}</div>
                            <div className={style.city}>{u.adress.city}</div>
                        </div>*/}
                    </div>
                )}
            </div>
        )
    }


export default Users