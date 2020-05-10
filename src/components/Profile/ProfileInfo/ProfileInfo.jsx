import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import lfj from "../../../images/looking_for_job.jpeg";
import hw from "../../../images/im_working.jpg"
import {Redirect} from "react-router-dom";



const ProfileInfo = ( props ) => {

    if (!props.profile) {
        return <Preloader/>
    }

    let p = props.profile

    let facebook

    return (
        <div>
            {/*<div>
            <img src='https://static8.depositphotos.com/1370441/848/i/450/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg' />
        </div>*/}
            <div className={style.wrapper}>
                <div className={style.place_for_photo}>
                    <img src={p.photos.large} />
                </div>
                <div className={style.your_profiles_wrapper}>
                    <div className={style.your_status}>
                        <span>{p.aboutMe}</span>
                    </div>
                    <div className={style.full_name}>
                        <span>Ваше имя:</span>
                        <span>{p.fullName ? p.fullName : "Не указано"}</span>
                    </div>
                    <div className={style.contacts}>
                        <div className={style.contacts_inner}>Контакты:</div>
                        <div className={style.social_networks}>
                            <div className={style.network}>
                                <span>Facebook:</span>
                                <span>{p.contacts.facebook ? p.contacts.facebook : "Нет"}</span>
                            </div>
                            <div className={style.network}>
                                <span>Website:</span>
                                <span>{p.contacts.website ? p.contacts.website : "Нет" }</span>
                            </div>
                            <div className={style.network}>
                                <span>VK:</span>
                                <span>{p.contacts.vk ? p.contacts.vk : "Нет" }</span>
                            </div>
                            <div className={style.network}>
                                <span>Twitter:</span>
                                <span>{p.contacts.twitter ? p.contacts.twitter : "Нет" }</span>
                            </div>
                            <div className={style.network}>
                                <span>Instagram:</span>
                                <span>{p.contacts.instagram ? p.contacts.instagram : "Нет" }</span>
                            </div>
                            <div className={style.network}>
                                <span>Youtube:</span>
                                <span>{p.contacts.youtube ? p.contacts.youtube : "Нет" }</span>
                            </div>
                            <div className={style.network}>
                                <span>Github:</span>
                                <span>{p.contacts.github ? p.contacts.github : "Нет" }</span>
                            </div>
                            <div className={style.network}>
                                <span>MainLink:</span>
                                <span>{p.contacts.mainLink ? p.contacts.mainLink : "Нет" }</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.searching_for_work}>
                        <span>Ищите ли вы работу?</span>
                        <img src={p.lookingForAJob? lfj : hw} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;