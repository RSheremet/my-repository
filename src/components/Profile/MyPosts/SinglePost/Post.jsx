import React from 'react';
import classes from '../../../../App.module.css';


const Post = (props) => {
    return (
        <div className={classes.singlePost}>
            <img src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig" />
            <div className={classes.post}>
                {props.posti}
            </div>
            <div className={classes.likes}>
                <span>{props.ILikeIt}likes</span>
            </div>
        </div>
            )
}

export default Post;