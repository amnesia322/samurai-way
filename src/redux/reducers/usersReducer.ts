import {v1} from "uuid";

type ActionsTypes = FollowACType | UnFollowACType | SetUsersACType
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type UserType = {
    id: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {country: string, city: string}
}
export type UsersPageType = {
    users: Array<UserType>
}

let initialState = {
    users: [
        {id: v1(), followed: true, fullName: 'Dmitriy', status: 'Im boss!', location: {country: 'Belarus', city: 'Minsk'}},
        {id: v1(), followed: true, fullName: 'Vitaliy', status: 'Whats up?!', location: {country: 'Russia', city: 'Moscow'}},
        {id: v1(), followed: false, fullName: 'amnesia', status: 'find for job', location: {country: 'Russia', city: 'Voronezh'}},
    ],
}


const usersReducer = (state: UsersPageType  = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state,
            users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return state
        default:
            return state
    }
}


export const followAC = (id: string) => {
    return {
        type: 'FOLLOW', userID: id
    } as const
}
export const unfollowAC = (id: string) => {
    return {
        type: 'UNFOLLOW',
        userID: id
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
    type: 'SET-USERS',
        users: users
    } as const
}



export default usersReducer;

