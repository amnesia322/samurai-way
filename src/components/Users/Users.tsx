import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import {v1} from "uuid";

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                followed: true, fullName: 'Dmitriy', status: 'Im boss!', location: {country: 'Belarus', city: 'Minsk'}},
            {id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                followed: true, fullName: 'Vitaliy', status: 'Whats up?!', location: {country: 'Russia', city: 'Moscow'}},
            {id: v1(), photoURL: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                followed: false, fullName: 'amnesia', status: 'find for job', location: {country: 'Russia', city: 'Voronezh'}},
        ])
    }
    //

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={s.avatar} alt='userAvatar'/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;