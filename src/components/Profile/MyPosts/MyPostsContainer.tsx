import React from "react";
import { RootStateType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {AnyAction, Store} from "redux";


export type MyPostsContainerPropsType = {
    store: Store<RootStateType, AnyAction>
}



function MyPostsContainer(props: MyPostsContainerPropsType) {
    //BLL
    let state = props.store.getState()
    const addPost = () => {
        let action = addPostAC();
        props.store.dispatch(action)
    }
    const onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} dispatch={props.store.dispatch} addPost={addPost} updateNewPostText={onPostChange} />
    );
}

export default MyPostsContainer