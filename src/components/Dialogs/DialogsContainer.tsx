import React from "react";
import {addMessageAC, dialogsPageType, updateNewMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: dialogsPageType
}

type MapDispatchPropsType = {
    addMessage: ()=>void
    updateNewMessageText: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;