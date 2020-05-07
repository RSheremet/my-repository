import React from "react";
import style from "./Users.module.css";
import Photo from "../../images/logo.jpg"
import {NavLink} from "react-router-dom";


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
                            {/*{u.followed === true ?
                                <button onClick={ () => { props.toFollow(u.id) } }>Unfollow</button> :
                                <button onClick={ () => { props.toUnFollow(u.id)  } }>Follow</button>}*/}
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