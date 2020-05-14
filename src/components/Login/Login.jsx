import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} name={'email'} component={'input'} />
                </div>
                <div>
                    <Field placeholder={'name'} name={'password'} component={'input'} />
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
                </div>
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


    return (
        <div>
            <h1>Зарегистрируйтесь пожалуйста</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default Login