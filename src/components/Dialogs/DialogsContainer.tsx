import React from "react";
import {addMessageAC, dialogsPageType} from "../../redux/reducers/dialogsReducer";
import {compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import withAuthRedirect from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: dialogsPageType
}

type MapDispatchPropsType = {
    addMessage: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (message) => {
            dispatch(addMessageAC(message))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);