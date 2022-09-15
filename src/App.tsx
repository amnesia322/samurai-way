import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import {addPost} from "./redux/state";
/*import {dialogsDataType, messagesDataType, PostDataType} from "./index";*/

export type AppPropsType = {
    /*dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    postData: Array<PostDataType>*/
    state: any
}

function App(props: AppPropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.navbar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={addPost}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>

    );
}


export default App;
