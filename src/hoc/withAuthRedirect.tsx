import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
};

function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }

    const ConnectedRedirectComponent = connect(mapStateToProps) (RedirectComponent)

return ConnectedRedirectComponent;
};

export default withAuthRedirect;

