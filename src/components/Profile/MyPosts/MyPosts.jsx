import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./SinglePost/Post";
import {addDynamicChangeCreator, addPostActionCreator} from "../../../Redux/profileValdef-reducer";




const MyPosts = (props) => {

    let postsElements = props.postsData.map( p => <Post posti={p.posti} IlikeIt={p.ILikeIt} />);

    let stringElement = React.createRef()

    let addPost = () => {
        props.dispatch( addPostActionCreator() )
    }

    let beenChanged = () => {
        let changedState = stringElement.current.value;
        let action = addDynamicChangeCreator(changedState);
        props.dispatch({...action})
    }

    return (
        <div className={classes.posts}>
            my posts
            <div>
                new post
            </div>
            {postsElements}
            <div>
                <textarea ref={stringElement} value={props.valdef} onChange={beenChanged}></textarea>
            </div>
            <button onClick={addPost}>Нажми на меня</button>
        </div>
    )
}

export default MyPosts;