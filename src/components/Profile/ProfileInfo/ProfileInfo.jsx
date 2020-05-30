import React from "react";
import style from "../../../App.module.css";


const ProfileInfo = ( props ) => {

    let p = props.profile;

    return (
        <div className={style.your_profiles_wrapper}>
            <div className={style.full_name}>
                <span>{p.fullName ? p.fullName : "Не указано"}</span>
            </div>
            <div className={style.string}></div>
            <div className={style.contacts_inner}>Контакты:</div>
            <div className={style.contacts}>
                <div className={style.social_networks_wrapper}>
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
                </div>
                <div className={style.social_networks_wrapper}>
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
            <div className={style.string}></div>
            <div className={style.searching_for_work}>
                {p.lookingForAJob
                    ?
                    <span className={style.lookForJob}>ИЩУ РАБОТУ</span>
                    :
                    <span className={style.noLookForJob}>НЕ ИЩУ РАБОТУ</span>
                }
            </div>
        </div>
    )

};

export default ProfileInfo