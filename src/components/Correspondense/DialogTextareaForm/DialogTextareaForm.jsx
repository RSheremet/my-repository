import React from 'react';
import {Field, reduxForm} from "redux-form";
import {fieldRequired, maxLengthCreator} from "../../validation/Validation";
import {FormsSimplification} from "../../Common/FormControl/FormsSimplification";

const maxLength20 = maxLengthCreator(20);

const DialogForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Введите Ваш текст'}
                   name={'dialogForm'}
                   component={FormsSimplification}
                   validate={[fieldRequired, maxLength20]}
            />
            <button>Отправить</button>
        </form>
    )

};

const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm);

const TextareaDialog = (props) => {

    const onSubmit = (formdata) => {
        props.addCorrespondenseClickCreator(formdata)
    };


    return (
        <div>
            <DialogReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default TextareaDialog