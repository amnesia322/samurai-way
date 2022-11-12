import React, {ReactNode} from 'react';
import userPhoto from "../../assets/images/userAvatar.png";
import s from "./users.module.css";
import axios from "axios";
import {UserType} from "../../redux/reducers/usersReducer";


export class UsersC extends React.Component<any>/*<()=> React.ReactNode, ()=> React.ReactNode, ()=> React.ReactNode>*/ {

    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    onPageChanged(page: number) {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }


    render(): ReactNode {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(p =>
                    <span className={this.props.currentPage === p ? s.selectedPage : ''}
                          onClick={(e) => this.onPageChanged(p)}>{p}</span>
                )}
            </div>

            {this.props.users.map((u: UserType) => {
                    const onFollowHandler = () => this.props.follow(u.id);
                    const onUnfollowHandler = () => this.props.unfollow(u.id);

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
        </div>
    }
}