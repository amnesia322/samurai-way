import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

type ActionsType = addPostACType | updateNewPostTextACType | setUserProfileACType
export type addPostACType = ReturnType<typeof addPostAC>
export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export type PostDataType = {
    id: string,
    message: string,
    likesCount: number
}
export type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: UserProfileType
}
export type UserProfileType = {
    aboutMe: null,
    contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null ,
        large: string | null
    }
}

let initialState = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 34},
        {id: v1(), message: 'It\'s my first post', likesCount: 23},
        {id: v1(), message: 'Nice to meet you!', likesCount: 48}
    ],
    newPostText: '',
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "Alex-cyber1",
        userId: 26685,
        photos: {
            small: null,
            large: null
        }
    }
}


const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state, postData: [...state.postData, newPost], newPostText: ''};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.value};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
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

export const setUserProfileAC = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res))
        })
}

export default profileReducer;

