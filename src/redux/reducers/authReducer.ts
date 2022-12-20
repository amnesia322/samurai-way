import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {LoginFormDataType} from "../../components/Login/LoginPage";

type ActionsTypes = SetUserDataAT | SetUserLoginAT

type SetUserDataAT = ReturnType<typeof setUserDataAC>
type SetUserLoginAT = ReturnType<typeof setUserLoginAC>

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
    isAuth: true
}

const authReducer = (state: HeaderType = initialState, action: ActionsTypes): HeaderType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "SET-USER-LOGIN":
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}


export const setUserDataAC = (data: HeaderType) => {
    return {
        type: 'SET-USER-DATA', data
    } as const
}

export const setUserLoginAC = (isAuth: boolean) => {
    return {
        type: 'SET-USER-LOGIN', isAuth
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

export const getUserLoginTC = (data: LoginFormDataType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setUserLoginAC(true))
            }
        })
}



export default authReducer;

