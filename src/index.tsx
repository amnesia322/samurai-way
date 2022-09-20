import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {RootStateType, subscribe} from "./redux/state";



 const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(state)


subscribe(rerenderEntireTree)