import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';



let toRender = (state) => {
    ReactDOM.render(<App newState={store.getState()} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
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
