import {combineReducers, createStore} from "redux";
import reduceAddPost from "./profileValdef-reducer";
import correspondense from "./correspondense-reducer";
import reduceUsers from "./users-reducer";

let reducers = combineReducers({
    reduceAddPost,
    correspondense,
    reduceUsers
})

let store = createStore( reducers )

export default store