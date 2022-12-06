import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

type ActionsTypes = FollowACType
    | UnFollowACType
    | SetUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingProgressACType
type FollowACType = ReturnType<typeof follow>
type UnFollowACType = ReturnType<typeof unfollow>
type SetUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalCountACType = ReturnType<typeof setTotalCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgress>


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
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export const follow = (id: number) => {
    return {
        type: 'FOLLOW', userID: id
    } as const
}
export const unfollow = (id: number) => {
    return {
        type: 'UNFOLLOW',
        userID: id
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

export const setCurrentPage = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        page: page
    } as const
}

export const setTotalCount = (count: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        count: count
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching: isFetching,
        userId: userId
    } as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
}

export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
                dispatch(toggleIsFollowingProgress(false, userId))
            }
        })
}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
                dispatch(toggleIsFollowingProgress(false, userId))
            }
        })
}


export default usersReducer;

