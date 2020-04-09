import {combineReducers, createStore} from "redux";
import reduceAddPost from "./profileValdef-reducer";
import correspondense from "./correspondense-reducer";

let reducers = combineReducers({
    reduceAddPost,
    correspondense
})

let store = createStore( reducers )

export default store