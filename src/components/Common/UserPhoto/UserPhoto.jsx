import React, {useEffect, useState} from "react";
import style from "../../../App.module.css"

const UserPhoto = ( profileProps ) => {

    let [photo, setUserPhoto] = useState(profileProps);

    useEffect( () => {
        setUserPhoto(profileProps);
    }, [profileProps]);

    return (
        <div className={style.thePhoto}>
            <img src={photo} />
        </div>
    )

};

export default UserPhoto;