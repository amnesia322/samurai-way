import React, {ReactNode} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followTC,
    getUsersTC,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollowTC,
    UsersPageType,
    UserType
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = UsersPageType

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

 class UsersContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize)
    }


    render(): ReactNode {


        return <>
            {this.props.isFetching ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.followTC}
                         unfollow={this.props.unfollowTC}
                         toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                         isFollowingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    //withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        toggleIsFollowingProgress, getUsersTC,
        followTC, unfollowTC
    })
)(UsersContainer)