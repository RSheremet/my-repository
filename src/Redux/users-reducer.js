import React from "react";
import {usersAPI} from "../components/API/API";
const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
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
    currentPage: 1,
    isFetching: true,
    isButtonPressed: []

};

const  reduceUsers = (state = usersData, action) => {

    let stateCopy;
    switch (action.type) {

        case FOLLOW_UNFOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return { ...u, followed: !u.followed };
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

export const toFollowUnfollow = ( userId ) => ({ type: FOLLOW_UNFOLLOW, userId });
export const toUpdateUsers = ( users ) => ({ type: SET_USERS, users });
export const changePage = ( pageId ) => ({ type: CHANGE_PAGE, pageId });
export const setTotalUsersCount = ( number ) => ({ type: CHANGE_TOTAL_USERS_COUNT, number });
export const setFetching = ( isFetching ) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setButtonPressed = ( isTueFalse, userId  ) => ({ type: BUTTON_ALREADY_PRESSED, isTueFalse, userId });

export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {

    dispatch(setFetching(true));
    dispatch(changePage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setFetching(false));
    dispatch(toUpdateUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

};

export const newPageGetUsers = (pageNumber, pageSize) => async (dispatch) => {

    dispatch(setFetching( true ));
    dispatch(changePage(pageNumber));
    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(setFetching( false ));
    dispatch(toUpdateUsers(data.items));

};

export const followThunkCreator = ( usersId, isFollowed ) => async (dispatch) => {

    if (isFollowed === true) {
        dispatch(setButtonPressed( true, usersId ));
        let data = await usersAPI.toUnFollowRequest( usersId );
        if (data.resultCode == 0) {
            dispatch(toFollowUnfollow(usersId));
            dispatch(setButtonPressed( false, usersId ));
        }
    } else if (isFollowed === false) {
        dispatch(setButtonPressed( true, usersId ));
        let data = await usersAPI.toFollowRequest( usersId );
        if (data.resultCode == 0) {
            dispatch(toFollowUnfollow(usersId));
            dispatch(setButtonPressed(false, usersId));
        }
    }

};

export default reduceUsers;