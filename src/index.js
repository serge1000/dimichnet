import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

//import {rerenderEntireTree} from "./render";

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state)
});


