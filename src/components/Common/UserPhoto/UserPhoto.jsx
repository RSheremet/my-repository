import React, {useEffect, useState} from "react";

const UserPhoto = ( profileProps ) => {

    let [photo, setUserPhoto] = useState(profileProps);

    useEffect( () => {
        setUserPhoto(profileProps);
    }, [profileProps]);

    return (
        <div>
            <img src={photo} />
        </div>
    )

};

export default UserPhoto;