import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import correspondense from "./correspondense-reducer";
import reduceUsers from "./users-reducer";
import profileRD from "./profile-reducer";
import authRD from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appRD from "./app-reducer";

let reducers = combineReducers({
    profileRD,
    correspondense,
    reduceUsers,
    authRD,
    form: formReducer,
    appRD
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
window.store = store;

export default store;