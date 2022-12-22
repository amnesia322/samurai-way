import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {LoginFormDataType} from "../../components/Login/LoginPage";
import {AppThunkDispatch} from "../redux-store";

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
                ...action.payload,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}


export const setUserDataAC = (id: number | null, email: string | null,
                              login: string | null,
                              isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA', payload: {id, email, login}, isAuth
    } as const
}


export const getUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.getUserData()
        .then(data => {
            const {id, email, login } = data.data
            if (data.resultCode === 0) {
                dispatch(setUserDataAC(id, email, login, true ))
            }
        })
}

export const login = (data: LoginFormDataType) => (dispatch: AppThunkDispatch) => {
    authAPI.login(data)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(getUserDataTC())
            }
        })
}

export const logout = () => (dispatch: AppThunkDispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false ))
            }
        })
}


export default authReducer;

