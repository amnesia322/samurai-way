import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {LoginFormDataType} from "../../components/Login/LoginPage";
import {AppThunkDispatch} from "../redux-store";
import {stopSubmit} from "redux-form";

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
        .then(res => {
            const {id, email, login } = res.data.data
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(id, email, login, true ))
            }
        })
}

export const login = (data: LoginFormDataType) => (dispatch: AppThunkDispatch) => {
    authAPI.login(data)
        .then(res => {
            console.log(res)
            if (res.data.resultCode === 0) {
                dispatch(getUserDataTC())
            } else {
                const message = res.messages.length > 0 ? res.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}))
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

