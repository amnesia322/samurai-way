import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import  thunkMiddleware from "redux-thunk"




let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store

export default store;