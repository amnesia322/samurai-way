import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/LoginPage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {useAppDispatch, useAppSelector} from "./redux/redux-store";
import {initialize} from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


function App() {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.initialized)

    useEffect(() => {
        dispatch(initialize())
    }, [])

    if (!isInitialized) {
        return <Preloader/>
    } else {
        return <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/login'
                       render={() => <Login/>}/>
            </div>
        </div>
    }
}


export default App;
