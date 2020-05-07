import {combineReducers, createStore} from "redux";
import correspondense from "./correspondense-reducer";
import reduceUsers from "./users-reducer";
import profileRD from "./profile-reducer";
import authRD from "./auth-reducer";

let reducers = combineReducers({
    profileRD,
    correspondense,
    reduceUsers,
    authRD
})

let store = createStore( reducers );

window.store = store;

export default store;