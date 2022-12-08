import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, getUserStatusTC, profilePageType, UserProfileType} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: UserProfileType,
    status: string | null
}
// type mapDispatchToPropsType = {
//     addPostAC: ()=> void,
//     updateNewPostTextAC: (newPost: string) => void,
//     setUserProfileAC: (profile: UserProfileType) => void
// }
// type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileContainer extends React.Component<any, profilePageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 26683;
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)

    }

    render() {

        return <Profile profile={this.props.profile} status={this.props.status}/>

    };
}



const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC,
        getUserStatusTC
    }),
    withRouter,
)(ProfileContainer)