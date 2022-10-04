import {v1} from "uuid";
import {dispatchActionType, profilePageType} from "../store";

let initialState = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 34},
        {id: v1(), message: 'It\'s my first post', likesCount: 23},
        {id: v1(), message: 'Nice to meet you!', likesCount: 48}
    ],
    newPostText: ''
}


const profileReducer = (state: profilePageType = initialState, action: dispatchActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            state.postData.push(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.value;
            return state;
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

