import {v1} from "uuid";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import {EmptyObject} from "redux";

type dialogsDataType = {
    id: string,
    name: string
    img: string
}
 type messagesDataType = {
    id: string,
    message: string
}
type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageText: string
}
 type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
 type PostDataType = {
    id: string,
    message: string,
    likesCount: number
}
export type RootStateType = EmptyObject & { profilePage: profilePageType; dialogsPage: dialogsPageType;}


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

    dispatch(action: any) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._callSubscriber(this._state)
    }
}


export default store;