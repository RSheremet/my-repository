import React from "react";
import style from "./Textarea.module.css";

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

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <ControlForm {...props} ><textarea {...input} {...restProps} /></ControlForm>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <ControlForm {...props} ><input {...input} {...restProps} /></ControlForm>
}