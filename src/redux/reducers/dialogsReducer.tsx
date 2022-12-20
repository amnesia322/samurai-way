import {v1} from "uuid";

type ActionsType = addMessageACType

export type addMessageACType = ReturnType<typeof addMessageAC>

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type dialogsDataType = {
    id: string,
    name: string
    img: string
}
export type messagesDataType = {
    id: string,
    message: string
}


let initialState = {
    dialogsData: [
        {
            id: v1(),
            name: 'Dimych',
            img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        },
        {
            id: v1(),
            name: 'Daniil',
            img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        },
        {
            id: v1(),
            name: 'Rogoz',
            img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        },
        {
            id: v1(),
            name: 'Vitaliy',
            img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        },
        {id: v1(), name: 'Maria', img: "https://cdn-icons-png.flaticon.com/512/194/194938.png"},
        {
            id: v1(),
            name: 'Valera',
            img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
        },
    ],
    messagesData: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'how are u?'},
        {id: v1(), message: 'crazy project!'},
        {id: v1(), message: 'vozmite menya rabotat)'},
    ],
}

const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsType): dialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {id: v1(), message: action.message}
            return {...state, messagesData: [...state.messagesData, newMessage]};
        default:
            return state;
    }

}

export const addMessageAC = (message: string) => {
    return {
        type: 'ADD-MESSAGE', message
    } as const
}


export default dialogsReducer;