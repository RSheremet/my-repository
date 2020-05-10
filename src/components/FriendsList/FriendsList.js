import React from 'react';
import style from './FriendsList.module.css';
import SingleFriend from "./SingleFriend/SingleFriend";
import {Redirect} from "react-router-dom";


const FriendsList = (props) => {

    /*let SingleFrinedd = props.name.map( f => <SingleFriend name={f.name} id={f.id} /> );*/
    if (props.store.getState().authRD.isAuth == false) return <Redirect to={'/login'} />;

    return (
        <div>
            {/*{SingleFrinedd}*/}
        </div>
    )
}


export default FriendsList;