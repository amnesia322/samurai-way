import React from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/reducers/profileReducer";

export type ProfileInfoPropsType = {
    profile: UserProfileType
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
                {props.profile.fullName}
                <img src={props.profile.photos.small !== null ? props.profile.photos.small :
                    'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo