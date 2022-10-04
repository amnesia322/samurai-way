import {v1} from "uuid";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./reducers/dialogsReducer";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./reducers/profileReducer";
import {EmptyObject} from "redux";

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
export type RootStateType = EmptyObject & { profilePage: profilePageType; dialogsPage: dialogsPageType;}
export type dispatchActionType = addPostACType | updateNewPostTextACType | addMessageACType | updateNewMessageTextACType
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
            newMessageText: ''
        },
    },
    _callSubscriber(state: RootStateType) {

    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: dispatchActionType) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._callSubscriber(this._state)
    }
}


export default store;