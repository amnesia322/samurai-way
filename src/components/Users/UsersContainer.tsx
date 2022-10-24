import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../../redux/reducers/usersReducer";

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = UsersPageType

type MapDispatchPropsType = {
    follow: (userID: string)=>void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
      unfollow: (userID: string) => {
          dispatch(unfollowAC(userID))
      },
      setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);