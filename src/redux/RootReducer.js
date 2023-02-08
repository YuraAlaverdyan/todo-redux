import { combineReducers } from "redux";
import ToDosReducer from './todos/reducer';
import FilterReducer from './Filter/reducer'
export const RootReducer = combineReducers({
    todolist:ToDosReducer,
    filter:FilterReducer
})