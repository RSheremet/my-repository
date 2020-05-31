import React from "react";
import {authAPI, profileAPI, usersAPI} from "../components/API/API";
import {stopSubmit} from "redux-form"
import {getUserProfileThunkCreatorr, setUsersStatus} from "./profile-reducer";

const SET_USER_DATA = 'SET-USER-DATA';
const LOGOUT_USER_DATA = 'LOGOUT-USER-DATA';
const IS_INITIALIZED = 'IS-INITIALIZED';


let usersData = {

    userId: null,
    email: null,
    login: null,

    isAuth: false,
    isInitialized: false

};

const  authRD = (state = usersData, action) => {

    let stateCopy;
    switch (action.type) {
        case SET_USER_DATA:
            stateCopy = {
                ...state,
                ...action.data
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

        case IS_INITIALIZED:
            stateCopy = {
                ...state,
                isInitialized: true
            };
            return stateCopy;

        default:
            return state;
    }
};


export const setAuthUserData = ( userId, login, email, isAuth ) => ({ type: SET_USER_DATA, data: {userId, login, email, isAuth} });
export const initializedSuccess = () => ({ type: IS_INITIALIZED });



export const setAuthUserDataThunkCreator = () => (dispatch) => {


        return usersAPI.toLogin().then(data => {
            if (data.email) {
                let {id, login, email} = data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });

};

export const toAuthUserDataThunkCreator = ( userFormData ) => async (dispatch) => {

    let { email, password, rememberMe = true } = userFormData;
    let data = await authAPI.authorization( email, password, rememberMe ); // ждем ответа на асинхронный запрос
    if (data.resultCode === 0) {

        data = await usersAPI.toLogin();

        if (data.email) {
            let {id, login, email} = data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    } else {
        let action = stopSubmit('login', {_error: "Введены не верные данные"}); // если введены не правильные данные то выведет ошибку
        dispatch(action);
    }
};

export const toLogout = () => async (dispatch) => {
    authAPI.deAuthorization().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
};

export const toCheckInitializationForProfile = ( userId ) => async (dispatch) => {
    let promise = dispatch(getUserProfileThunkCreatorr(userId));
    await Promise.all([promise]);
    dispatch(initializedSuccess());


};

export default authRD;