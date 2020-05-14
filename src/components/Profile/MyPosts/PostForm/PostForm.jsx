import React from 'react';
import {Field, reduxForm} from "redux-form";


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Введите Ваш текст'} name={'postForm'} component={'textarea'} />
            <button>Отправить</button>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

const TextareaPost = (props) => {

    const onSubmit = (formdata) => {
        debugger
    };


    return (
        <div>
            <h1>Зарегистрируйтесь пожалуйста</h1>
            <PostReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default TextareaPost