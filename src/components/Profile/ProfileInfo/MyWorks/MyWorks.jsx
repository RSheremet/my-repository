import React from "react";
import style from "../../../../App.module.css";


const MyWorks = ( props ) => {

    return (
        <div className={style.myWorksWrapper}>
            <div className={style.myWorks}>
                <img src={props.photo} />
            </div>
        </div>
    )

};

export default MyWorks