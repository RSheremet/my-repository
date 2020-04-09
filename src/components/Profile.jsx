import React from 'react';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
    <div>
        <ProfileInfo />
        <MyPostsContainer />
    </div>
    )
}

export default Profile;