import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addDescription} from './Redux/State';
import state from './Redux/State';



let toCall = () => {
    ReactDOM.render(<App newState={state} description={addDescription}/>, document.getElementById('root'));
}

toCall()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
