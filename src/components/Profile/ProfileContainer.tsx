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
    getUserStatusTC: (userId: number) => void,
    getUserProfileTC: (userId: number) => void
}
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<paramsType>, profilePageType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        console.log(this.props)

        if (!userId) {
            userId = 26288;
        }
        userId &&
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