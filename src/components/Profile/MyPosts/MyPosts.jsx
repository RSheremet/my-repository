import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./SinglePost/Post";


const MyPosts = (props) => {

    let postsElements = props.postsData.map( p => <Post posti={p.posti} IlikeIt={p.ILikeIt} />);

    let stringElement = React.createRef()
    let matth = () => {

        let Something = stringElement.current.value;
        props.description(Something)
        debugger
    }

    return (
        <div className={classes.posts}>
            my posts
            <div>
                new post
            </div>
            {postsElements}
            <div>
                <textarea ref={stringElement}></textarea>
            </div>
            <button onClick={matth}>Нажми на меня</button>
        </div>
    )
}

export default MyPosts;