import React from "react";
import {setAuthUserDataThunkCreator} from "./auth-reducer";

const INITIALIZED = 'INITIALIZED';


let appData = {

    isInitialized: false

};

const  appRD = (state = appData, action) => {

    let stateCopy;
    switch (action.type) {

        case INITIALIZED:
            stateCopy = {
                ...state,
                isInitialized: true
            };
            return stateCopy;

        default:
            return state;
    }
};

export const setInitializedSuccess = () => ({ type: INITIALIZED });

export const setInitializedThunkCreator = () => async (dispatch) => {

        let promise = dispatch(setAuthUserDataThunkCreator());

        await Promise.all([promise])

        dispatch(setInitializedSuccess())

        /*return (dispatch) => {
            usersAPI.toLogin().then(data => {
                if (data.email) {
                    let {id, login, email} = data;
                    dispatch(setAuthUserData(id, login, email));
                }
            })
        }*/
};




export default appRD;