import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./Profile/MyPosts/MyPosts";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData} />
    </div>
    )
}

export default Profile;