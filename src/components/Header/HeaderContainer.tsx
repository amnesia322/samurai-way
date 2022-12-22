import React, {ReactNode} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserDataTC, HeaderType, logout} from "../../redux/reducers/authReducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchToPropsType = {
    setUserData: (data: HeaderType) => void
    logout: () => void
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUserDataTC()
    }

    render(): ReactNode {
        return <Header isAuth={this.props.isAuth} login={this.props.login}
        setUserData={this.props.setUserData} logout={this.props.logout}/>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    getUserDataTC, logout
})(HeaderContainer)
