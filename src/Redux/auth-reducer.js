import React from "react";
import {authAPI, profileAPI, usersAPI} from "../components/API/API";
import {stopSubmit} from "redux-form"
import {setUsersStatus} from "./profile-reducer";

const SET_USER_DATA = 'SET-USER-DATA';
const LOGOUT_USER_DATA = 'LOGOUT-USER-DATA';
const SET_USER_PHOTO = 'SET-USER-PHOTO';


let usersData = {

    userId: null,
    email: null,
    login: null,

    isAuth: false,
    profilePhoto: ''

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

        case SET_USER_PHOTO:
            debugger
            stateCopy = {
                ...state,
                profilePhoto: action.photo
            };
            return stateCopy;

        default:
            return state;
    }
};


export const setAuthUserData = ( userId, login, email, isAuth ) => ({ type: SET_USER_DATA, data: {userId, login, email, isAuth} });
export const setAuthUserPhoto = ( photo ) => ({ type: SET_USER_PHOTO, photo });



export const setAuthUserDataThunkCreator = () => (dispatch) => {


        return usersAPI.toLogin().then(data => {
            if (data.email) {
                let {id, login, email} = data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });

};

export const toAuthUserDataThunkCreator = ( userFormData ) => async (dispatch) => {

    let { email, password, rememberMe } = userFormData;
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

export const toChangePhoto = ( photo ) => {

    let photoToSend = new FormData(); // когда мы отправляем файл на сервер - нужно делать это используя
    photoToSend.append('image', photo); // специальную разметку "multipart/FormData" - для этого необ
                                                // ходимо создать специальный объект как сделано это здесь
                                            // и поместить в него название файла и сам файл "Formdata(название, файл)"
    return (dispatch) => {
        profileAPI.sendPhoto(photoToSend).then(data => { // отправляем в API, где файл уже будет отправлен на сервер
            debugger
            dispatch(setAuthUserPhoto(data.data.photos.large))
        })
    }

};

export default authRD;