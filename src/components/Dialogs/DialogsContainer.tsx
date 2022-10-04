import React from "react";
import { RootStateType,} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Store} from "redux";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store: Store<RootStateType>
}

const DialogsContainer = (props: DialogsContainerType) => {
    const addMessage = () => {
        let action = addMessageAC()
        props.store.dispatch(action)
    }
    const onChangeMessage = (text: string) => {
        let action = updateNewMessageTextAC(text)
        props.store.dispatch(action)
    }

    //UI
    return (
        <Dialogs addMessage={addMessage} updateNewMessageText={onChangeMessage} state={props.store.getState().dialogsPage}/>
    )
}

export default DialogsContainer;