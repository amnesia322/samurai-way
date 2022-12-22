import axios from "axios";
import {LoginFormDataType} from "../components/Login/LoginPage";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": 'f8c9c547-0d03-4fe5-8a49-d0564fd78b8a'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userID: number) {
        return instance.post(`follow/${userID}`, {})
            .then(res => res.data)
    },
    unfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(res => res.data)
    }
}

export const authAPI = {
    getUserData() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    login(data: LoginFormDataType) {
        return instance.post('auth/login', data)
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(res => res)
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(res => res)
    }
}
