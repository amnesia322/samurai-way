import React from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/reducers/profileReducer";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
    profile: UserProfileType,
    status: string | null,
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>


                <img src={props.profile.photos.small !== null ? props.profile.photos.small :
                    'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'}
                className={s.avatar}/>
                <div>
                    <span>{props.profile.fullName}</span>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;