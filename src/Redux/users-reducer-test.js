/*
import React from "react";
import {changePage, setFetching} from "./users-reducer";
import {usersAPI} from "../components/API/API";

test('There must be 3 posts', () => {
    // 1) test data
    let action = setFetching( true );
    dispatch(changePage(page));
    usersAPI.getUsers(page, pageSize).then(data => {
        dispatch(setFetching(false));
    let state = {
        profile: {
            posts: [
                {id: 1, posti: 'Its my own cosial network', ILikeIt: 15},
                {id: 2, posti: 'Sounds fantastic!', ILikeIt: 20}
            ],
            singleProfile: null
        },

        status: ''

    };
    // 2) test action
    let newState = profileRD( state, action );

    // 3) expectation
    expect(newState.profile.posts.length).toBe(3)
    expect(newState.profile.posts[2].posti.postForm).toBe("newText");

});*/
