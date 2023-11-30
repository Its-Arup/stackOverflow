import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as QuestionReducer } from "./QuestionReducer/reducer";
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
    AuthReducer,
    QuestionReducer
})
export const Store = legacy_createStore(rootReducer , applyMiddleware(thunk))
