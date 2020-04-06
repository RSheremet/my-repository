const CORRESPONDENSE_DYNAMIC_CHANGE = 'CORRESPONDENSE_DYNAMIC_CHANGE'
const CORRESPONDENSE_STATIC_CHANGE = 'CORRESPONDENSE_STATIC_CHANGE'


let initialCorrespondense = {
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
}


const correspondense = (state = initialCorrespondense, action) => {
    if (action.type === CORRESPONDENSE_STATIC_CHANGE ) {
        let newMessage = {
            id: 5,
            message: state.correspondenseChange.changed
        }
        state.correspondence.messagesData.push(newMessage)
        state.correspondenseChange.changed = ''
    } else if (action.type === CORRESPONDENSE_DYNAMIC_CHANGE) {
        state.correspondenseChange.changed = action.toChange
    }
    return state
}

export const addCorrespondenseChangeCreator = (toChange) => ({ type: CORRESPONDENSE_DYNAMIC_CHANGE, toChange })
export const addCorrespondenseClickCreator = () => ({ type: CORRESPONDENSE_STATIC_CHANGE })

export default correspondense