import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./Profile/MyPosts/MyPosts";


const Profile = () => {
    return (
    <div>
        <div>
            <img src='https://static8.depositphotos.com/1370441/848/i/450/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg' />
        </div>
        <div>
            ava + descr
        </div>
        <MyPosts/>
    </div>
    )
}

export default Profile;