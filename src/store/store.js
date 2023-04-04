import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/UserSlice/User.slice";

const store = configureStore({
  reducer: combineReducers({
    users: UserSlice.reducer,
  }),
});
export default store;


