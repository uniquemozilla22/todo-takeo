import { createSlice } from "@reduxjs/toolkit";

const ErrorSlice = createSlice({
  name: "error",
  initialState: {
    status: false,
    message: "",
    code: 0,
  },
  reducers: {
    UserNotVerifiedError(state, action) {
      state = {
        status: true,
        message: action.payload,
        code: 498,
      };
    },
    clearError(state) {
      state = {
        status: false,
        message: "",
        code: 0,
      };
    },
  },
});

export const { UserNotVerifiedError, clearError } = ErrorSlice.actions;
export default ErrorSlice;
