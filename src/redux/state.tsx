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
    newMessageText: string
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
export type dispatchActionType = tsarType
export type tsarType = addPostACType | updateNewPostTextACType | addMessageACType | updateNewMessageTextACType
export type ActionType = 'ADD-POST' | 'UPDATE-NEW-POST-TEXT'
export type addPostACType = ReturnType<typeof addPostAC>
export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type addMessageACType = ReturnType<typeof addMessageAC>
export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

const store = {
    _state: {
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
            newMessageText: ''
        },
        navbar: {}
    },
    _callSubscriber(func: any) {

    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType)=> void) {
        this._callSubscriber = observer
    },

    dispatch(action: dispatchActionType) {
        if(action.type === 'ADD-POST') {
            const newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.value;
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {id: v1(), message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText= action.value;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const updateNewPostTextAC = (newPost: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        value: newPost
    } as const
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        value: newMessage
    } as const
}

export default store