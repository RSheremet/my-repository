import React from "react";
import style from "./Users.module.css";
import Photo from "../../images/logo.jpg"
import {NavLink, Redirect} from "react-router-dom";


const Users = ( props ) =>  {

    if (props.isAuth == false) return <Redirect to={'/login'} />;

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
                                <button disabled={props.isButtonPressed.some( id => id === u.id)}
                                        onClick={ () => { props.followThunkCreator( u.id ) } }
                                >Unfollow</button>
                                    /*usersAPI.toUnFollowRequest( u.id ).then(data => { // П Р И М Е Р
                                       if (data.resultCode == 0) { // П Р И М Е Р
                                           props.toUnFollow(u.id); // П Р И М Е Р
                                           props.setButtonPressed( false, u.id ); // П Р И М Е Р
                                       } // П Р И М Е Р
                                   })*/ // П Р И М Е Р
                                :
                                <button disabled={props.isButtonPressed.some( id => id === u.id)}
                                        onClick={ () => { props.unFollowThunkCreator( u.id ) } }>Follow</button>}
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