import {v1} from "uuid";

type ActionsType = addPostACType | updateNewPostTextACType
export type addPostACType = ReturnType<typeof addPostAC>
export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type PostDataType = {
    id: string,
    message: string,
    likesCount: number
}
export type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

let initialState = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 34},
        {id: v1(), message: 'It\'s my first post', likesCount: 23},
        {id: v1(), message: 'Nice to meet you!', likesCount: 48}
    ],
    newPostText: ''
}


const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state, postData: [...state.postData, newPost], newPostText: ''};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.value};
        default:
            return state
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

export default profileReducer;

