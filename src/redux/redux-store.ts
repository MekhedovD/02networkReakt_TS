import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

export type RootStateType = ReturnType<typeof reducers>

let store: StoreType = createStore(reducers)
export type ReduxStoreType = typeof store // новый тип (redux)

export default store;