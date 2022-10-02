import {v1} from "uuid";
import {dialogsPageType, dispatchActionType} from "../state";

const dialogsReducer = (state: dialogsPageType, action: dispatchActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {id: v1(), message: state.newMessageText}
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.value;
            return state;
        default:
            return state;
    }

}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}
export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        value: newMessage
    } as const
}

export default dialogsReducer;