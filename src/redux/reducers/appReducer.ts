import {AppThunkDispatch} from "../redux-store";
import {getUserDataTC} from "./authReducer";


let initialState = {
    initialized: false
}

//type InitialStateType = ReturnType<typeof initialState>

type ActionsTypes = ReturnType<typeof initializedSuccess>

export const appReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}

export const initialize = () => (dispatch: AppThunkDispatch) => {
    let promise = dispatch(getUserDataTC());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}