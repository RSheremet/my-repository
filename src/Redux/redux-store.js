import {combineReducers, createStore} from "redux";
import reduceAddPost from "./profileValdef-reducer";
import correspondense from "./correspondense-reducer";

let reducers = combineReducers({
    profile: reduceAddPost,
    valdef: reduceAddPost,
    correspondenseChange: correspondense,
    correspondence: correspondense
})

let store = createStore( reducers )

export default store