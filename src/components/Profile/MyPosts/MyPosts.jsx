import React from 'react';
import style from '../../../App.module.css';
import Post from "./SinglePost/Post";
import TextareaPost from "./PostForm/PostForm";





const MyPosts = ( props ) => {

    let postsElements = props.postsData.map( p => <Post posti={p.posti} key={p.id} IlikeIt={p.ILikeIt} />);


    let addPost = () => {
        props.addPost()
    };

    let beenChanged = (e) => {
        let changedState = e.target.value;
        props.beenChanged( changedState )
    };

    return (
        <div className={style.myPosts_wrapper}>
            <span className={style.messageTitle}>Введите свое сообщение</span>
            <div className={style.string}></div>
            <TextareaPost addPostActionCreatorr={props.addPostActionCreatorr} />
            {postsElements}
            <div>
                {/*<textarea
                    value={ props.valueDefault }
                    onChange={beenChanged}>
                </textarea>*/}
            </div>
        </div>
    )
};

export default MyPosts;