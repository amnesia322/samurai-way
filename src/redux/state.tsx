import {v1} from "uuid";

export type dialogsDataType = {
    id: string,
    name: string
}
export type messagesDataType = {
    id: string,
    message: string
}
export type PostDataType = {
    id: string,
    message: string,
    likesCount: number
}


let state = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 34},
            {id: v1(), message: 'It\'s my first post', likesCount: 23},
            {id: v1(), message: 'Nice to meet you!', likesCount: 48}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Daniil'},
            {id: v1(), name: 'Rogoz'},
            {id: v1(), name: 'Vitaliy'},
            {id: v1(), name: 'Ivan'},
            {id: v1(), name: 'Valera'},
        ],
        messagesData: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'how are u?'},
            {id: v1(), message: 'crazy project!'},
            {id: v1(), message: 'vozmite menya rabotat)'},
        ],
    }
}

export default state