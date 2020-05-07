import {combineReducers, createStore} from "redux";
import correspondense from "./correspondense-reducer";
import reduceUsers from "./users-reducer";
import profileRD from "./profile-reducer";

let reducers = combineReducers({
    profileRD,
    correspondense,
    reduceUsers
})

let store = createStore( reducers );

window.store = store;

export default store;