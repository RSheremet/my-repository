import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import Photo from "../../images/logo.jpg"


const Users = ( props ) => {

    let get_Users = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.toUpdateUsers(response.data.items);

            });
        }
    }

    let noUsers
    if (props.users.length === 0) {
        noUsers = <button onClick={get_Users}>Получить пользователей</button>
    }

    console.log(props.users)

    return (
        <div>
            { noUsers }
            { props.users.map( u =>
                <div key={u.id} className={`${style.wrapper} ${style.user}`}>
                    <div className={style.breakdown}>
                        <img src={u.photos.small !== null ? u.photos.small : Photo } className={style.user_photo} />
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