import React from "react";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let usersData = {

    users: [
        /*{id: 1, name: 'Valera', adress: {country: 'Russia', city: 'Moscow'}, followed: false,
            photo:'https://lh3.googleusercontent.com/proxy/fdUOncdF4Cvmo4_tLsYdi1LdQMfu5seKEAlf_2CY6laR0nQQj-peYYhGkTCcn-NZiogQAobpi01OHJHh1cdYMYRKSxgT9y8OVDQAbgVy-JBQHCIMRkY'},
        {id: 2, name: 'Igor', adress: {country: 'Belarus', city: 'Minsk'}, followed: true,
            photo: 'https://www.meme-arsenal.com/memes/35d219e36fe1ce26570f4aa3c740b15f.jpg'},
        {id: 3, name: 'Roman', adress: {country: 'Ukraine', city: 'Kiev'}, followed: false,
            photo: 'https://cdn.fishki.net/upload/post/2018/01/28/2495548/2-mnnfhsfa.jpg'}*/
    ]

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
            stateCopy = { ...state, users: [...state.users, ...action.users] };
            return stateCopy;

        default:
            return state;

    }
};

export const followUser = ( userId ) => ({ type: FOLLOW, userId });
export const unFollowUser = ( userId ) => ({ type: UNFOLLOW, userId });
export const setUsers = ( users ) => ({ type: SET_USERS, users });

export default reduceUsers;