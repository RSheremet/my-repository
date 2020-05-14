import React from "react";
import {render} from "react-dom";
import {usersAPI} from "../components/API/API";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE';
const CHANGE_TOTAL_USERS_COUNT = 'CHANGE-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const BUTTON_ALREADY_PRESSED = 'BUTTON-ALREADY-PRESSED'

let usersData = {

    users: [],
    pageSize: 99,
    totalUsersCount: 1,
    currentPage: 2,
    isFetching: false,
    isButtonPressed: []

};

const  reduceUsers = (state = usersData, action) => {

    let stateCopy;
    switch (action.type) {

        case FOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
            return stateCopy;

        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.uuserId ) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };
            return stateCopy;

        case SET_USERS:
            stateCopy = { ...state, users: [...action.users] };
            return stateCopy;

        case CHANGE_PAGE:
            stateCopy = {...state, currentPage: action.pageId };
            return stateCopy;

        case CHANGE_TOTAL_USERS_COUNT:
            stateCopy = {...state, totalUsersCount: action.number};
            return stateCopy;

        case TOGGLE_IS_FETCHING:
            stateCopy = {...state, isFetching: action.isFetching};
            return stateCopy;

        case BUTTON_ALREADY_PRESSED:
            stateCopy = {
                ...state,
                isButtonPressed: action.isTueFalse
                    ? [...state.isButtonPressed, action.userId]
                    : [...state.isButtonPressed.filter(id => id !== action.userId)]
            };
            return stateCopy;

        default:
            return state;

    }
};

export const toFollowSuccess = ( userId ) => ({ type: FOLLOW, userId });
export const toUnFollow = ( uuserId ) => ({ type: UNFOLLOW, uuserId });
export const toUpdateUsers = ( users ) => ({ type: SET_USERS, users });
export const changePage = ( pageId ) => ({ type: CHANGE_PAGE, pageId });
export const setTotalUsersCount = ( number ) => ({ type: CHANGE_TOTAL_USERS_COUNT, number });
export const setFetching = ( isFetching ) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setButtonPressed = ( isTueFalse, userId  ) => ({ type: BUTTON_ALREADY_PRESSED, isTueFalse, userId });

export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(setFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setFetching(false));
            dispatch(toUpdateUsers(data.items));
            /*let num = data.totalCount / 180;
            num = Math.ceil(num);*/
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const newPageGetUsers = (pageNumber, pageSize) => {

    return (dispatch) => {
        dispatch(setFetching( true ));
        dispatch(changePage(pageNumber));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setFetching( false ));
            dispatch(toUpdateUsers(data.items));
        });
    }

};

export const followThunkCreator = ( usersId ) => {
    return (dispatch) => {
        dispatch(setButtonPressed( true, usersId ));
        usersAPI.toUnFollowRequest( usersId ).then(data => {
            if (data.resultCode == 0) {
                dispatch(toUnFollow(usersId));
                dispatch(setButtonPressed( false, usersId ));
            }
        })
    }
};

export const unFollowThunkCreator = ( usersId ) => {
    return (dispatch) => {
        dispatch(setButtonPressed( true, usersId ));
        usersAPI.toFollowRequest( usersId ).then(data => {
            if (data.resultCode == 0) {
                dispatch(toFollowSuccess(usersId));
                dispatch(setButtonPressed( false, usersId ));
            }
        })
    }
};

export default reduceUsers;