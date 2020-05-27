import React from "react";
import style from "../../App.module.css";
import {NavLink} from "react-router-dom";
import Photo from "../../images/logo.jpg";

const User = (props) => {

    let user = props.user;

    return (
        <div key={user.id} className={`${style.wrapper} ${style.user}`}>
            <div className={style.breakdown}>
                <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : Photo} className={style.user_photo} />
                </NavLink>
                <div className={style.user_name}>{user.name}</div>
                {
                    user.followed === true ?
                    <button disabled={props.isButtonPressed.some( id => id === user.id)}
                            onClick={ () => { props.followThunkCreator( user.id, user.followed ) } }>Unfollow</button>
                    /*usersAPI.toUnFollowRequest( user.id ).then(data => { // П Р И М Е Р
                       if (data.resultCode == 0) { // П Р И М Е Р
                           props.toUnFollow(user.id); // П Р И М Е Р
                           props.setButtonPressed( false, user.id ); // П Р И М Е Р
                       } // П Р И М Е Р
                   })*/ // П Р И М Е Р
                    :
                    <button disabled={props.isButtonPressed.some( id => id === user.id)}
                            onClick={ () => { props.followThunkCreator( user.id, user.followed ) } }>Follow</button>
                }
            </div>
            {/*<div className={style.breakdown}>
                            <div className={style.country}>{user.adress.country}</div>
                            <div className={style.city}>{user.adress.city}</div>
                        </div>*/}
        </div>
    )
};

export default User