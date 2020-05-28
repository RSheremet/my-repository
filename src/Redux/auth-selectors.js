import React from "react";
import {createSelector} from "reselect";

export const getIsInitialized = ( state ) => {
    return state.authRD.isInitialized
};

export const getUserId = ( state ) => {
    return state.authRD.userId
};

export const getLogin = ( state ) => {
    return state.authRD.login
};



