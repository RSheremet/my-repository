import React from 'react';
import style from '../../App.module.css';
import {FieldSimple, Input} from "../Common/FormControl/FormsSimplification";
import {fieldRequired, maxLengthCreator} from "../validation/Validation";
import {reduxForm} from "redux-form";

const maxLength30 = maxLengthCreator(30);

const Settings = (props) => {

    return (
        <div className={style.settingsWrapper}>
            <div className={style.yourName}>
                <form onSubmit={props.handleSubmit}>
                    <div className={style.settingsSingleForm}>
                        <span className={style.fullName}>Введите Ваше полное ммя</span>
                        {FieldSimple('Введите Ваше полное имя', 'fullName', Input, fieldRequired, maxLength30)}
                    </div>
                    <div className={style.settingsSingleForm}>
                        <span className={style.lookingForAJob}>Введите какую работу Вы ищете</span>
                        {FieldSimple('Опишите работу которую ищете', 'lookingForAJobDescription', Input, fieldRequired, maxLength30)}
                    </div>
                    <div className={style.settingsSingleForm}>
                        <span className={style.contacts}>Укажите Ваши контактные данные в сети</span>
                        {FieldSimple('Github', 'github', Input, fieldRequired, maxLength30)}
                        {FieldSimple('Vk', 'vk', Input, fieldRequired, maxLength30)}
                        {FieldSimple('Facebook', 'facebook', Input, fieldRequired, maxLength30)}
                        {FieldSimple('Instagram', 'instagram', Input, fieldRequired, maxLength30)}
                        {FieldSimple('Twitter', 'twitter', Input, fieldRequired, maxLength30)}
                        {FieldSimple('Website', 'website', Input, fieldRequired, maxLength30)}
                        {FieldSimple('Youtube', 'youtube', Input, fieldRequired, maxLength30)}
                        {FieldSimple('MainLink', 'mainLink', Input, fieldRequired, maxLength30)}
                    </div>
                    <div className={style.submitWrapper}>
                        <button>Отправить</button>
                    </div>
                </form>
            </div>
        </div>

    )
};

const SettingsReduxForm = reduxForm({form: 'settings'})(Settings);

const ChangeSettings = (props) => {

    const onSubmit = (formdata) => {
        /*props.addSettingsChangeActionCreator(formdata)*/
    };

    return (
        <div className={style.formSettingsWrapper}>
            <span className={style.accountOptions}>Настройки аккаунта</span>
            <SettingsReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default ChangeSettings;
