import React from "react";
import style from "../../../App.module.css";

const FancySliderPicture = ( fancySliderPicture, id, onFancyBoxOn ) => {

    return (
            <div className={style.thePicture}>
                <img src={fancySliderPicture} onClick={ () => { onFancyBoxOn(id) } } />
            </div>
    )

};

export default FancySliderPicture;