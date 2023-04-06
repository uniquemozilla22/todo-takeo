import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    LoginActions(state, action) {
      state.token = action.payload;
    },
  },
});




export const { LoginActions } = UserSlice.actions;
export default UserSlice;
