import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControl/Textarea";
import {fieldRequired, maxLengthCreator} from "../validation/Validation";

const maxLength20 = maxLengthCreator(20);

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