import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

type ActionsType = addPostACType
    | setUserProfileACType | setUserStatusACType
export type addPostACType = ReturnType<typeof addPostAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export type setUserStatusACType = ReturnType<typeof setUserStatus>
export type PostDataType = {
    id: string,
    message: string,
    likesCount: number
}
export type profilePageType = {
    postData: Array<PostDataType>
    profile: UserProfileType
    status: string | null
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
    fullName: string | null,
    userId: number | null,
    photos: {
        small: string | null,
        large: string | null
    }
}

let initialState = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 34},
        {id: v1(), message: 'It\'s my first post', likesCount: 23},
        {id: v1(), message: 'Nice to meet you!', likesCount: 48}
    ],
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
    },
    status: null
}


const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), message: action.newPost, likesCount: 0}
            return {...state, postData: [...state.postData, newPost]};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostAC = (newPost: string) => {
    return {
        type: "ADD-POST", newPost
    } as const
}


export const setUserProfileAC = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status: status
    } as const
}

export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res))
        })
}

export const getUserStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profileReducer;

