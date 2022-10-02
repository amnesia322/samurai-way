import {v1} from "uuid";
import {dispatchActionType, profilePageType} from "../state";

const profileReducer = (state: profilePageType, action: dispatchActionType) => {
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

