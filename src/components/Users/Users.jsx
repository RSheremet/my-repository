import React from "react";
import Paginator from "./Paginator";
import User from "./User";


const Users = ( props ) =>  {

        return (
            <div>
                <Paginator totalUsersCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           pages={props.pages}
                           currentPage={props.currentPage}
                           onChangePage={props.onChangePage}
                />
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