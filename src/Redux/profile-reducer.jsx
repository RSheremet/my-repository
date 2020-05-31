import React from "react";
import {profileAPI, usersAPI} from "../components/API/API";
import {setButtonPressed, toFollowUnfollow} from "./users-reducer";
const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PHOTO = 'SET-USER-PHOTO';
const SET_USER_PROFILE_INFO = 'components/settings/SET-USER-PROFILE-INFO';

let initialProfile = {

    profile: {
        posts: [
            {id: 1, posti: 'Its my own cosial network', ILikeIt: 15},
            {id: 2, posti: 'Sounds fantastic!', ILikeIt: 20}
        ]
    },

    singleProfile: null,

    status: ''

};

const  profileRD = (state = initialProfile, action) => {

    let stateCopy;
    switch (action.type) {

        case ADD_POST:
            stateCopy = {
                ...state,
                profile: {
                    posts: [...state.profile.posts, {id: 3, posti: action.text.postForm, ILikeIt: 2}],
                }
            };
            return stateCopy;

        case SET_USER_PROFILE:
            stateCopy = {
                ...state,
                singleProfile: action.file
            };
            return stateCopy;

        case SET_USER_STATUS:
            stateCopy = {
                ...state,
                status: action.status
            };
            return stateCopy;

        case DELETE_POST:
            stateCopy = {
                ...state,
                profile: {
                    posts: [...state.profile.posts.filter( p => p.id !== action.postId )]
                }
            };
            return stateCopy;

        case SET_USER_PHOTO:
            stateCopy = {
                ...state,
                singleProfile: {
                    ...state.singleProfile,
                    photos: {
                        ...state.singleProfile.small,
                        large: action.photo
                    }
                }
            };
            return stateCopy;

        case SET_USER_PROFILE_INFO:
            stateCopy = {
                ...state,
                singleProfile: {
                   ...state.singleProfile, ...action.info
                },

            };
            return stateCopy;

        default:
            return state;

    }
};

export const addPostActionCreatorr = ( text ) => ({ type: ADD_POST, text });
export const setUserProfile = (file) => ({ type: SET_USER_PROFILE, file });
export const setUsersStatus = (status) => ({ type: SET_USER_STATUS, status });
export const deletePostActionCreatorr = ( postId ) => ({ type: DELETE_POST, postId });
export const setAuthUserPhoto = ( photo ) => ({ type: SET_USER_PHOTO, photo });
export const setUserProfileInfo = ( info ) => ({ type: SET_USER_PROFILE_INFO, info });

export const toChangePhoto = ( photo ) => {

    let photoToSend = new FormData(); // когда мы отправляем файл на сервер - нужно делать это используя
    photoToSend.append('image', photo); // специальную разметку "multipart/FormData" - для этого необ
                                                // ходимо создать специальный объект как сделано это здесь
                                                // и поместить в него название файла и сам файл "Formdata(название, файл)"
    return (dispatch) => {
        profileAPI.sendPhoto(photoToSend).then(data => { // отправляем в API, где файл уже будет отправлен на сервер
            dispatch(setAuthUserPhoto(data.data.photos.large))
        })
    }

};

export const getUserProfileThunkCreatorr = ( userID ) => async (dispatch) => {

    let data = await usersAPI.getUserProfile( userID );
    dispatch(setUserProfile(data))

};////////////////////////////////////////////////// СЛЕДУЮЩИЙ ЗАПРОС ИСПОЛЬЗУЕТ .then НО ПО СУТИ ОСТАЕТСЯ ТАКИМ ЖЕ/////////////////////////////////// П Р И М Е Р

export const getUsersStatusThunkCreator = (userID) => {
    return (dispatch) => {
        profileAPI.getUsersStatus( userID ).then(data => {
            dispatch(setUsersStatus(data))
        })
    }
};

export const sendUsersStatusThunkCreator = ( status ) => {
    return () => {
        profileAPI.sendStatus( status )
    }
};

export const sendUserProfileInfoTC = ( formdata, userId ) => async (dispatch) => {

    debugger

        let info = {
            AboutMe: "AboutMe",
            userId: userId,
            lookingForAJob: true,
            lookingForAJobDescription: formdata.lookingForAJobDescription,
            fullName: formdata.fullName,
            contacts: {
                github: formdata.github ? formdata.github : "",
                vk: formdata.vk ? formdata.vk : "",
                facebook: formdata.facebook ? formdata.facebook : "",
                instagram: formdata.instagram ? formdata.instagram : "",
                twitter: formdata.twitter ? formdata.twitter : "",
                website: formdata.website ? formdata.website : "",
                youtube: formdata.youtube ? formdata.youtube : "",
                mainLink: formdata.mainLink ? formdata.mainLink : ""
            }
        };

        let data = await profileAPI.sendProfileInfo( info );
        if (data.resultCode == 0) {
            debugger
            dispatch(setUserProfileInfo(data));
        }
};

export default profileRD;