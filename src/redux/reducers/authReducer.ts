import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

type ActionsTypes = SetUserDataAT

type SetUserDataAT = ReturnType<typeof setUserDataAC>

export type HeaderType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: HeaderType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: HeaderType = initialState, action: ActionsTypes): HeaderType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setUserDataAC = (data: HeaderType) => {
    return {
        type: 'SET-USER-DATA', data
    } as const
}

export const getUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.getUserData()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataAC(data.data))
            }
        })
}


export default authReducer;

