import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    loggedIn: false,
  },
  reducers: {
    LoginActions(state, action) {
      state.token = action.payload;
      state.loggedIn = true;
    },
  },
});
export const { LoginActions } = UserSlice.actions;
export default UserSlice;
