import React from 'react';
import style from './FriendsList.module.css';
import SingleFriend from "./SingleFriend/SingleFriend";


const FriendsList = (props) => {

    let SingleFrinedd = props.name.map( f => <SingleFriend name={f.name} id={f.id} /> );

    return (
        <div>
            {SingleFrinedd}
        </div>
    )
}

export default FriendsList;