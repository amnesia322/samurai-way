import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";

//BLL
/*export type dialogsDataType = {
    id: string,
    name: string
}
export type messagesDataType = {
    id: string,
    message: string
}
export type PostDataType = {
    id: string,
    message: string,
    likesCount: number
}

const dialogsData: Array<dialogsDataType> = [
    {id: v1(), name: 'Dimych'},
    {id: v1(), name: 'Daniil'},
    {id: v1(), name: 'Rogoz'},
    {id: v1(), name: 'Vitaliy'},
    {id: v1(), name: 'Ivan'},
    {id: v1(), name: 'Valera'},
]
const messagesData: Array<messagesDataType> = [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'how are u?'},
    {id: v1(), message: 'crazy project!'},
    {id: v1(), message: 'vozmite menya rabotat)'},
]
const postData = [
    {id: v1(), message: 'Hi, how are you?', likesCount: 34},
    {id: v1(), message: 'It\'s my first post', likesCount: 23},
    {id: v1(), message: 'Nice to meet you!', likesCount: 48}
]*/

/*const addPost = (/!*messageText: string*!/) => {
    let newPost = {id: v1(), message: 'lalala'/!*messageText*!/, likesCount: 0}
    setPostData([newPost, ...postData])
}*/

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);