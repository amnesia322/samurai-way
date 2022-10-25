import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import userPhoto from '../../assets/images/userAvatar.png'
import axios from "axios";

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

        // props.setUsers([
        //     {
        //         id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        //         followed: true, fullName: 'Dmitriy', status: 'Im boss!', location: {country: 'Belarus', city: 'Minsk'}
        //     },
        //     {
        //         id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        //         followed: true, fullName: 'Vitaliy', status: 'Whats up?!', location: {country: 'Russia', city: 'Moscow'}
        //     },
        //     {
        //         id: v1(),
        //         photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        //         followed: false,
        //         fullName: 'amnesia',
        //         status: 'find for job',
        //         location: {country: 'Russia', city: 'Voronezh'}
        //     },
        // ])
    }
    //

    return (
        <div>
            {props.users.map(u => {
                    const onFollowHandler = () => props.follow(u.id);
                    const onUnfollowHandler = () => props.unfollow(u.id);

                    return <div key={u.id}>

                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.avatar} alt='userAvatar'/>
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
        </div>
    );
};

export default Users;