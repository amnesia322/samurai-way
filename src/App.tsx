import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogsDataType, messagesDataType, PostDataType} from "./index";

export type AppPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    postData: Array<PostDataType>
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ ()=> <Profile postData={props.postData}/> }/>
                    <Route path='/dialogs' render={ ()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
