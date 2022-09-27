import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import { RootStateType} from "./redux/state";

export type AppPropsType = {
    state: RootStateType
    addPost: (message: string) => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.navbar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>

    );
}


export default App;
