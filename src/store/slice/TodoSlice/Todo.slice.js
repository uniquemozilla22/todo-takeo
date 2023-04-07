import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    fetchTodo(state, action) {
      state.data = [...action.payload];
    },
  },
});

export const { LoginActions } = TodoSlice.actions;
export default TodoSlice;
