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
};


const correspondense = (state = initialCorrespondense, action) => {

    let stateCopy;
    switch (action.type) {

        case CORRESPONDENSE_STATIC_CHANGE:
            stateCopy = {
                ...state,
                correspondence: {
                    conversationData: [...state.correspondence.conversationData],
                    messagesData: [...state.correspondence.messagesData, {id: 5, message: action.message.dialogForm}] // добавление текста из того, что находится в хранилище
                }
            };
            return stateCopy;

        default:
            return state
    }
}

export const addCorrespondenseClickCreator = ( message ) => ({ type: CORRESPONDENSE_STATIC_CHANGE, message }) // сопоставление "пароля" для реализации кода

export default correspondense