import React from "react";
import {authAPI, usersAPI} from "../components/API/API";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'SET-USER-DATA';
const LOGOUT_USER_DATA = 'LOGOUT-USER-DATA';


let usersData = {

    userId: null,
    email: null,
    login: null,

    isAuth: false

};

const  authRD = (state = usersData, action) => {

    let stateCopy;
    switch (action.type) {
        case SET_USER_DATA:
            stateCopy = {
                ...state,
                ...action.data,
                isAuth: true
            };
            return stateCopy;

        case LOGOUT_USER_DATA:
            stateCopy = {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false
            };
            return stateCopy;

        default:
            return state;
    }
};


export const setAuthUserData = ( userId, login, email ) => ({ type: SET_USER_DATA, data: {userId, login, email} });
export const setLogouthUserData = () => ({ type: LOGOUT_USER_DATA });

export const setAuthUserDataThunkCreator = () => (dispatch) => {


        usersAPI.toLogin().then(data => {
            if (data.email) {
                let {id, login, email} = data;
                dispatch(setAuthUserData(id, login, email));
            }
        });

    return "It Incubator"
};

export const toAuthUserDataThunkCreator = ( userFormData ) => {

    return (dispatch) => {
    let { email, password, rememberMe } = userFormData;
        authAPI.authorization( email, password, rememberMe ).then(data => {
            if (data.resultCode === 0) {

                    usersAPI.toLogin().then(data => {
                        if (data.email) {
                            let {id, login, email} = data;
                            dispatch(setAuthUserData(id, login, email));
                        }
                    })
                } else {
                let action = stopSubmit('login', {_error: "Введены не верные данные"}); // если введены не правильные данные то выведет ошибку
                dispatch(action);
            }
        })
     }
}


export const toLogout = () => {

    return (dispatch) => {
        authAPI.deAuthorization().then(data => {
            if (data.resultCode === 0) {
                dispatch(setLogouthUserData())
            }
        })
    }
};


export default authRD;