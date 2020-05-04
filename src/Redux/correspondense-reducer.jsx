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

    let stateCopy
    switch (action.type) {
        case CORRESPONDENSE_STATIC_CHANGE:
            let newMessage = state.correspondenseChange.changed  // сохранение текста из старого state
            stateCopy = {
                ...state,
                correspondence: {
                    conversationData: [...state.correspondence.conversationData],
                    messagesData: [...state.correspondence.messagesData, {id: 5, message: newMessage}] // добавление текста из того, что находится в хранилище
                },
                correspondenseChange: {
                    changed: '' // изменение в хранилище для textarea
                }
            }
            return stateCopy
        case CORRESPONDENSE_DYNAMIC_CHANGE:
            stateCopy = {
                ...state,
                correspondenseChange: {
                    changed: action.toChange // изменение в хранилище для textarea
                }
            }
            return stateCopy
        default:
            return state
    }
}

export const addCorrespondenseChangeCreator = (toChange) => ({ type: CORRESPONDENSE_DYNAMIC_CHANGE, toChange }) // сопоставление "пароля" для реализации кода
export const addCorrespondenseClickCreator = () => ({ type: CORRESPONDENSE_STATIC_CHANGE }) // сопоставление "пароля" для реализации кода

export default correspondense