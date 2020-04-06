import reduceAddPost from "./profileValdef-reducer";
import correspondense from "./correspondense-reducer";

let store = {
    _state: {
        correspondence: {
            conversationData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Vitek'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Valera'},
            ],
            messagesData: [
                {id: 1, message: "how is your it-kamasutra"},
                {id: 2, message: "why"},
                {id: 3, message: "yo"},
            ]
        },
        correspondenseChange: {
            changed: ''
        },
        profile: {
            posts: [
                {id: 1, posti: 'Its my own cosial network', ILikeIt: 15},
                {id: 2, posti: 'Sounds fantastic!', ILikeIt: 20}
            ]
        },
        valdef: {
            valueDefault: 'Так написано по дефолту'
        },
        friendsList: {
            friendsName: [
                {name: 'dimych', id: 1},
                {name: 'vitek', id: 2},
                {name: 'sveta', id: 3},
                {name: 'valera', id: 4}
            ],
            friendsAge: [
                {age: 23},
                {age: 24},
                {age: 25},
                {age: 26}
            ]
        },
    },

    _toRenderEntireTree() {
        console.log('state has been changed')
    },

    getState() {
        return this._state
    },

    entireTree(whatRender) {
        this._toRenderEntireTree = whatRender
    },

    dispatch(action) {

        reduceAddPost(this._state, action)
        correspondense(this._state, action)

        this._toRenderEntireTree()

    },

}

export default store;