import React from "react";
import {createSelector} from "reselect";

const getUsersSelector = ( state ) => {
 return state.reduceUsers.users
};

export const getUsers = createSelector(getUsersSelector, ( users ) => {
    return users.filter( u => true )
});



export const getPageSize = ( state ) => {
    return state.reduceUsers.pageSize
};

export const getUsersCount = ( state ) => {
    return state.reduceUsers.totalUsersCount

};

export const getCurrentPage = ( state ) => {
    return state.reduceUsers.currentPage
};

export const getWhetherIsFetching = ( state ) => {
    return state.reduceUsers.isFetching
};

export const getWhetherIsButtonPressed = ( state ) => {
    return state.reduceUsers.isButtonPressed
};

export const getWhetherIsAuth = ( state ) => {
    return state.authRD.isAuth
};



