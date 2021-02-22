import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
// import {StoreType} from "./store";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

export type RootStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)
export type ReduxStoreType = typeof store // новый тип (redux)

export default store;