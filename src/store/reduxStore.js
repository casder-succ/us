import {combineReducers, legacy_createStore as createStore} from "redux";
import navigationReducer from "./navigationReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    Navigation: navigationReducer
});

export const store = createStore(reducers);