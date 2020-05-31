import React from 'react';
import style from '../../App.module.css';
import {FieldSimple, FieldSimpleSettings, Input} from "../Common/FormControl/FormsSimplification";
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
                        {FieldSimpleSettings('Github', 'github', Input)}
                        {FieldSimpleSettings('Vk', 'vk', Input)}
                        {FieldSimpleSettings('Facebook', 'facebook', Input)}
                        {FieldSimpleSettings('Instagram', 'instagram', Input)}
                        {FieldSimpleSettings('Twitter', 'twitter', Input)}
                        {FieldSimpleSettings('Website', 'website', Input)}
                        {FieldSimpleSettings('Youtube', 'youtube', Input)}
                        {FieldSimpleSettings('MainLink', 'mainLink', Input)}
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
        debugger
        props.sendUserProfileInfoTC(formdata, props.userId)

    };

    return (
        <div className={style.formSettingsWrapper}>
            <span className={style.accountOptions}>Настройки аккаунта</span>
            <SettingsReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default ChangeSettings;
