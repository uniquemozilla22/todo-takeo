import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/UserSlice/User.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import TodoSlice from "./slice/TodoSlice/Todo.slice";

const persistConfig = {
  key: "root",
  storage,
};
const LocalReducer = combineReducers({
  users: UserSlice.reducer,
  todo: TodoSlice.reducer,
});

const reducer = persistReducer(persistConfig, LocalReducer);

const store = configureStore({
  reducer,
});

export const persistedStore = persistStore(store);

export default store;
