import {applyMiddleware, combineReducers, createStore} from "redux";
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

let store = createStore( reducers, applyMiddleware(thunkMiddleware) );

window.store = store;

export default store;