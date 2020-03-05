import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./SinglePost/Post";


const MyPosts = () => {

    let postsData = [
        {id: 1, posti: 'Its my own cosial network', ILikeIt: 15},
        {id: 2, posti: 'Sounds fantastic!', ILikeIt: 20}
    ]


    return (
        <div className={classes.posts}>
            my posts
            <div>
                new post
            </div>
            <Post posti={postsData[0].posti} ILikeIt={postsData[0].ILikeIt} id={postsData[0].id} />
            <Post posti={postsData[1].posti} ILikeIt={postsData[1].ILikeIt} id={postsData[1].id} />
        </div>
    )
}

export default MyPosts;