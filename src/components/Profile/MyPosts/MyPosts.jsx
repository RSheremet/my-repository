import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./SinglePost/Post";
import TextareaPost from "./PostForm/PostForm";





const MyPosts = ( props ) => {

    console.log( props )

    let postsElements = props.postsData.map( p => <Post posti={p.posti} key={p.id} IlikeIt={p.ILikeIt} />);


    let addPost = () => {
        props.addPost()
    }

    let beenChanged = (e) => {
        let changedState = e.target.value;
        props.beenChanged( changedState )
    }

    return (
        <div className={classes.posts}>
            my posts
            <div>
                new post
            </div>
            {postsElements}
            <div>
                {/*<textarea
                    value={ props.valueDefault }
                    onChange={beenChanged}>
                </textarea>*/}
                <TextareaPost addPostActionCreatorr={props.addPostActionCreatorr} />
            </div>
        </div>
    )
}

export default MyPosts;