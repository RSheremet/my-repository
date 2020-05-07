import React from "react";
import {render} from "react-dom";
const SET_USER_DATA = 'SET-USER-DATA';

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

        default:
            return state;

    }
};


export const setAuthUserData = ( userId, login, email ) => ({ type: SET_USER_DATA, data: {userId, login, email} });


export default authRD;