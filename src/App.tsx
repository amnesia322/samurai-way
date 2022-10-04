import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route} from "react-router-dom";
import {dispatchActionType, RootStateType} from "./redux/store";
import {Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    state: RootStateType
    dispatch: (action: dispatchActionType) => void
    store: Store<RootStateType>
}

function App(props: AppPropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile  store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                </div>
            </div>

    );
}


export default App;
