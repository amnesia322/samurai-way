import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {AppStateType} from "./redux/redux-store";
import {Provider} from "react-redux";


const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());


store.subscribe(() => {
    rerenderEntireTree(store.getState())
});