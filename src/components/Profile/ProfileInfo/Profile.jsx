import React from 'react';
import styles from '../../../App.module.css';
import UserPhoto from "../../Common/UserPhoto/UserPhoto";
import MyWorksContainer from "./MyWorks/MyWorksContainer";
import ProfileInfo from "./ProfileInfo";



const Profile = (props ) => {

    let changePhoto = (e) => {
    if (e.target.files[0])
        props.toChangePhoto(e.target.files[0])
    };


    let profilePhotoChanger;
    let someId = Number(props.someId)
    if (someId === props.userId) {
        profilePhotoChanger = <input name="myFile" type="file" onChange={changePhoto} />
    }

    return (

        <div className={styles.profile_info}>
            <div className={styles.wrapper}>
                <div className={styles.place_for_photo} >
                    { UserPhoto(props.profile.photos.large) }
                    {/*{ profilePhotoChanger }*/}
                </div>
                <ProfileInfo {...props} />
                <MyWorksContainer />
            </div>
        </div>
    )
};

export default Profile;