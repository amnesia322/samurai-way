import React from 'react';
import s from './users.module.css'
import userPhoto from '../../assets/images/userAvatar.png'
import {UserType} from "../../redux/reducers/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    toggleIsFollowingProgress: (isFetching: boolean) => void
    isFollowingInProgress: boolean
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    //

    return (
        /*<div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => {
                    const onFollowHandler = () => props.follow(u.id);
                    const onUnfollowHandler = () => props.unfollow(u.id);

                    return <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.avatar}
                             alt='userAvatar'/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={onUnfollowHandler}>Unfollow</button>
                            : <button onClick={onFollowHandler}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>"u.location.country"</div>
                        <div>"u.location.city"</div>

                    </span>
                </span>
                    </div>
                }
            )}
        </div>*/
        <div>
            <div>
                {pages.map(p =>
                    <span className={props.currentPage === p ? s.selectedPage : s.pageButton}
                          onClick={(e) => props.onPageChanged(p)}>{p}</span>
                )}
            </div>

            {props.users.map((u: UserType) => {
                    const onFollowHandler = () => {
                        props.toggleIsFollowingProgress(true)
                        usersAPI.follow(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                    props.toggleIsFollowingProgress(false)
                                }
                            })
                    };
                    const onUnfollowHandler = () => {
                        props.toggleIsFollowingProgress(true)
                        usersAPI.unfollow(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                    props.toggleIsFollowingProgress(false)
                                }
                            })
                    }

                    return <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                                             className={s.avatar}
                                                             alt='userAvatar'/> </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={onUnfollowHandler} disabled={props.isFollowingInProgress}>Unfollow</button>
                            : <button onClick={onFollowHandler} disabled={props.isFollowingInProgress}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>"u.location.country"</div>
                        <div>"u.location.city"</div>

                    </span>
                </span>
                    </div>
                }
            )}
        </div>
    );
};

export default Users;