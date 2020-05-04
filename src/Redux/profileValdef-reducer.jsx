import React from "react";
const ADD_POST = 'ADD-POST'
const DYNAMIC_CHANGE = 'DYNAMIC-CHANGE'

let initialProfile = {

    profile: {
        posts: [
            {id: 1, posti: 'Its my own cosial network', ILikeIt: 15},
            {id: 2, posti: 'Sounds fantastic!', ILikeIt: 20}
        ]
    },

    valdef: {
        valueDefault: 'Так написано по дефолту'
    },

}

const  reduceAddPost = (state = initialProfile, action) => {

    let stateCopy
    switch (action.type) {
        case ADD_POST:
            let description = state.valdef.valueDefault
            stateCopy = {
                ...state,
                profile: {
                    posts: [...state.profile.posts, {id: 3, posti: description, ILikeIt: 2}]
                },
                valdef: {
                    valueDefault: '' // изменение в хранилище для textarea
                }
            }
            return stateCopy
        case DYNAMIC_CHANGE:
            stateCopy = {
                ...state,
                valdef: {
                    valueDefault: action.toHeal
                }
            }
            return stateCopy
        default:
            return state

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const addDynamicChangeCreator = (toHeal) => ({ type: DYNAMIC_CHANGE, toHeal })

export default reduceAddPost;