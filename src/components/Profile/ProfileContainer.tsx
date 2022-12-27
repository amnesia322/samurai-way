import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserProfileTC,
    getUserStatusTC,
    profilePageType,
    updateStatusTC,
    UserProfileType
} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: UserProfileType,
    status: string | null
    userId: number | null
}

type paramsType = {
    userId: string | undefined
}

type mapDispatchToPropsType = {
    updateStatusTC: (status: string) => void,
    getUserStatusTC: (userId: number | null) => void,
    getUserProfileTC: (userId: number | null) => void
}
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<paramsType>, profilePageType> {
    componentDidMount() {
        let userId: number | null = Number(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)

    }

    render() {

        return <Profile profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatusTC}/>

    };
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC,
        getUserStatusTC,
        updateStatusTC
    }),
    withRouter,
)(ProfileContainer)