import React from "react";
import {reduxForm} from "redux-form";

import {fieldRequired, maxLengthCreator} from "../validation/Validation";
import {Redirect} from "react-router-dom";
import style from '../Common/FormControl/Textarea.module.css'
import {FieldSimple, Input} from "../Common/FormControl/FormsSimplification";

const maxLength20 = maxLengthCreator(30);

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {FieldSimple('email', 'email', Input, fieldRequired, maxLength20)}
            {FieldSimple('name', 'password', Input, fieldRequired, maxLength20)}
            {FieldSimple("", "rememberMe", "input", fieldRequired, maxLength20, {type: "checkbox"}, "remember me")}
            {/*<div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me //////////// П Р И М Е Р
            </div>*/}
            { props.error &&
            <div className={style.form_summary_error}>
                {props.error}
            </div>
             }
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);



const Login = (props) => {

    const onSubmit = (formdata) => {
        props.toAuthUserDataThunkCreator(formdata)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile/:userID"} />
    }


    return (
        <div>
            <h1>Зарегистрируйтесь пожалуйста</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};


export default Login