import React from 'react';
import {Field, reduxForm} from "redux-form";
import {fieldRequired, maxLengthCreator} from "../../../validation/Validation";
import {FormsSimplification} from "../../../Common/FormControl/FormsSimplification";
import style from '../../../../App.module.css';

const maxLength20 = maxLengthCreator(20);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Введите Ваш текст'}
                   name={'postForm'}
                   component={FormsSimplification}
                   validate={[fieldRequired, maxLength20]}
            />
            <button>Отправить</button>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

const TextareaPost = (props) => {

    const onSubmit = (formdata) => {
        props.addPostActionCreatorr(formdata)
    };


    return (
        <div className={style.formWrapper}>
            <PostReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default TextareaPost