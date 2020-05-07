import React from "react";
import style from "./Users.module.css";
import Photo from "../../images/logo.jpg"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toFollow, toUnFollow} from "../../Redux/users-reducer";


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
                                <button onClick={ () =>

                                     { axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b891edb4-172f-4673-a388-0183624ea4a0"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.toUnFollow(u.id)
                                        }
                                    })} }
                                    >Unfollow</button>

                                :
                                <button onClick={ () => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b891edb4-172f-4673-a388-0183624ea4a0"
                                        }
                                    })
                                        .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.toFollow(u.id)
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