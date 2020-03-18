import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./SinglePost/Post";


const MyPosts = (props) => {

    let postsElements = props.postsData.map( p => <Post posti={p.posti} IlikeIt={p.ILikeIt} />);

    return (
        <div className={classes.posts}>
            my posts
            <div>
                new post
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;