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
    if (action.type === ADD_POST) {
        let description = {
            id: 3,
            posti: state.valdef.valueDefault,
            ILikeIt: 2
        }

        let stateCopy = {...state}

        stateCopy.profile = {...state.profile}
        stateCopy.profile.posts = [...state.profile.posts]

        stateCopy.profile.posts.push(description)
        stateCopy.valdef.valueDefault = ''
        
        return stateCopy
    } else if (action.type === DYNAMIC_CHANGE) {
        let stateCopy = {...state}
        stateCopy.valdef.valueDefault = action.toHeal
        return stateCopy
    }
    return state
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const addDynamicChangeCreator = (toHeal) => ({ type: DYNAMIC_CHANGE, toHeal })

export default reduceAddPost;