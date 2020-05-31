import React from "react";
import Paginator from "./Paginator";
import User from "./User";
import style from "../../App.module.css"


const Users = ( props ) =>  {

    let totalUsersCount = props.totalUsersCount
    let pageSize= props.pageSize
    let pages= props.pages
    let currentPage= props.currentPage
    let onChangePage= props.onChangePage


    return (
        <div className={style.usersContainer}>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       pages={props.pages}
                       currentPage={props.currentPage}
                       onChangePage={props.onChangePage}
            />
            <div className={style.string}></div>
            {props.users.map(user =>
                <User user={user}
                      isButtonPressed={props.isButtonPressed}
                      followThunkCreator={props.followThunkCreator}
                />
            )}
        </div>
    )
};


export default Users