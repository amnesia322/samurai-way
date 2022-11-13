type ActionsTypes = FollowACType
    | UnFollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setTotalCountACType
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalCountACType = ReturnType<typeof setTotalCountAC>
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}


const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.page}
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.count}
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

export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        page: page
    } as const
}

export const setTotalCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        count: count
    } as const
}


export default usersReducer;

