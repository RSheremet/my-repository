import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./SinglePost/Post";


const MyPosts = () => {
    return (
        <div className={classes.posts}>
            my posts
            <div>
                new post
            </div>
            <Post posti="Its my own cosial network" ILikeIt="15" />
            <Post posti="Sounds fantastic!" ILikeIt="20" />
        </div>
    )
}

export default MyPosts;