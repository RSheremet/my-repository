import React from "react";
import {render} from "react-dom";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE';
const CHANGE_TOTAL_USERS_COUNT = 'CHANGE-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let usersData = {

    users: [],
    pageSize: 3,
    totalUsersCount: 1,
    currentPage: 2,
    isFetching: false

};

const  reduceUsers = (state = usersData, action) => {

    let stateCopy;
    switch (action.type) {

        case FOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };
            return stateCopy;

        case UNFOLLOW:
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

        default:
            return state;

    }
};

export const toFollow = ( userId ) => ({ type: FOLLOW, userId });
export const toUnFollow = ( userId ) => ({ type: UNFOLLOW, userId });
export const toUpdateUsers = ( users ) => ({ type: SET_USERS, users });
export const changePage = ( pageId ) => ({ type: CHANGE_PAGE, pageId });
export const setTotalUsersCount = ( number ) => ({ type: CHANGE_TOTAL_USERS_COUNT, number });
export const setFetching = ( isFetching ) => ({ type: TOGGLE_IS_FETCHING, isFetching });


export default reduceUsers;