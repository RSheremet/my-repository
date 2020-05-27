import React from "react";
import style from "../../../App.module.css";
import {Field} from "redux-form";

export const ControlForm = ({input, meta, child, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + ( hasError ? style.error : " " )}>
            <div>
                { props.children }
            </div>
            <span>
                {hasError && <span>{meta.error}</span>}
            </span>
        </div>
    )
}

export const FormsSimplification = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <ControlForm {...props} ><textarea {...input} {...restProps} /></ControlForm>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <ControlForm {...props} ><input {...input} {...restProps} /></ControlForm>
}



//// FIELD FORM SIMPLIFICATION ///////

export const FieldSimple = (placeholder, name, component = "", WhetherFieldRequired = "", maxLength = "", props = {}, text = "") => (

        <div>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={[WhetherFieldRequired, maxLength]}
                   {...props}
            /> {text}
        </div>

)

