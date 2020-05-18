import React from 'react';
import profileRD, {addPostActionCreatorr, deletePostActionCreatorr} from "./profile-reducer";

test('There must be 3 posts', () => {
    // 1) test data
    let action = addPostActionCreatorr( "newText" );
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

});

test('One the number of messages should be decreased', () => {
    // 1) test data

    let action = deletePostActionCreatorr( 2 );
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
    let newState = profileRD(state, action)
    expect(newState.profile.posts.length).toBe(1)
})