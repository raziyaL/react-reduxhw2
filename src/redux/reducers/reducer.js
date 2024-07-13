import {combineReducers} from "redux";
import MainPageReducer from "./MainPageReducer";
import ContactPageReducer from "./ContactPageReducer";
import UsersPageReducer from "./UsersPageReducer";

export const rootReducer = combineReducers({
    MainPageReducer,
    ContactPageReducer,
    UsersPageReducer
})