import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//BLL
export type dialogsDataType = {
    id: number,
    name: string
}
export type messagesDataType = {
    id: number,
    message: string
}
export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}

const dialogsData: Array<dialogsDataType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Daniil'},
    {id: 3, name: 'Rogoz'},
    {id: 4, name: 'Vitaliy'},
    {id: 5, name: 'Ivan'},
    {id: 6, name: 'Valera'},
]
const messagesData: Array<messagesDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'how are u?'},
    {id: 3, message: 'crazy project!'},
    {id: 4, message: 'vozmite menya rabotat)'},
]
const postData: Array<PostDataType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 34},
    {id: 2, message: 'It\'s my first post', likesCount: 23},
    {id: 3, message: 'Nice to meet you!', likesCount: 48}
]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>,
  document.getElementById('root')
);