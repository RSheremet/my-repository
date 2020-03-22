import React from 'react';
import {NavLink} from "react-router-dom";

const SingleFriend = (props) => {

    let path = '/friendsList/' + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default SingleFriend;