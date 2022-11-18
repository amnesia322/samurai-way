import React, {ReactNode} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {HeaderType, setUserDataAC} from "../../redux/reducers/authReducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchToPropsType = {
    setUserData: (data: HeaderType) => void
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    debugger
                    this.props.setUserDataAC(res.data.data)
                }
            })

    }

    render(): ReactNode {
        return <Header isAuth={this.props.isAuth} login={this.props.login}
        setUserData={this.props.setUserData}/>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    setUserDataAC
})(HeaderContainer)
