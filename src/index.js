import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import StoreContext from "./components/reactContext";
import {BrowserRouter} from "react-router-dom";



let toRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}

toRender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    toRender()
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
