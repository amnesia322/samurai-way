import {v1} from "uuid";



export type dialogsDataType = {
    id: string,
    name: string
    img: string
}
export type messagesDataType = {
    id: string,
    message: string
}
export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
export type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type PostDataType = {
    id: string,
    message: string,
    likesCount: number
}
export type RootStateType = {
     profilePage: profilePageType
    dialogsPage: dialogsPageType
    navbar: any
}

let rerenderEntireTree = (func: any) => {

}

let state: RootStateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 34},
            {id: v1(), message: 'It\'s my first post', likesCount: 23},
            {id: v1(), message: 'Nice to meet you!', likesCount: 48}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: v1(), name: 'Dimych', img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"},
            {id: v1(), name: 'Daniil', img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"},
            {id: v1(), name: 'Rogoz', img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"},
            {id: v1(), name: 'Vitaliy', img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"},
            {id: v1(), name: 'Maria', img: "https://cdn-icons-png.flaticon.com/512/194/194938.png"},
            {id: v1(), name: 'Valera', img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"},
        ],
        messagesData: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'how are u?'},
            {id: v1(), message: 'crazy project!'},
            {id: v1(), message: 'vozmite menya rabotat)'},
        ],
    },
    navbar: {}
}

export const addPost = (message: string) => {
    const newPost = {id: v1(), message, likesCount: 0}
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType)=> void) => {
    rerenderEntireTree = observer
}

export default state