import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControl/Textarea";
import {fieldRequired, maxLengthCreator} from "../validation/Validation";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from '../Common/FormControl/Textarea.module.css'

const maxLength20 = maxLengthCreator(30);



const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'email'}
                   name={'email'}
                   component={Input}
                   validate={[fieldRequired, maxLength20]}
            />
            <Field placeholder={'name'}
                   name={'password'}
                   component={Input}
                   validate={[fieldRequired, maxLength20]}
            />
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
            </div>
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