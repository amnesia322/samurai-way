

type ActionsTypes = FollowACType | UnFollowACType | SetUsersACType
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
// export type UserType = {
//     id: string,
//     photoURL: string
//     followed: boolean,
//     fullName: string,
//     status: string,
//     location: {country: string, city: string}
// }

export type UserType = {
    "name": string,
    "id": number,
    "photos": {
    "small": string | null,
        "large": string | null
},
    "status": string | null,
    "followed": boolean
}


export type UsersPageType = {
    users: Array<UserType>
}

let initialState: UsersPageType = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const followAC = (id: number) => {
    return {
        type: 'FOLLOW', userID: id
    } as const
}
export const unfollowAC = (id: number) => {
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

