import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addPostAC, getUserProfileTC, profilePageType, updateNewPostTextAC} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";

// type mapStateToPropsType = {
//     profile: UserProfileType
// }
// type mapDispatchToPropsType = {
//     addPostAC: ()=> void,
//     updateNewPostTextAC: (newPost: string) => void,
//     setUserProfileAC: (profile: UserProfileType) => void
// }
// type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<any, profilePageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 26683;
        }
        this.props.getUserProfileTC(userId)


    }

    render() {
        return <Profile profile={this.props.profile}/>

    };

}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    addPostAC,
    updateNewPostTextAC, getUserProfileTC
})(WithURLDataContainerComponent)