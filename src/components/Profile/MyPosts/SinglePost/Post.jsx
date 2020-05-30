import React from 'react';
import style from '../../../../App.module.css';


const Post = (props) => {

    return (
        <div className={style.singlePost}>
            {/*<img src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig" />*/}
            <div className={style.post}>
                {props.posti}
            </div>
            <div className={style.likesWrapper}>
                <div className={style.likes}>
                    {props.ILikeIt}
                    <div className={ style.img }></div>
                </div>
            </div>
        </div>
    )
}

export default Post;