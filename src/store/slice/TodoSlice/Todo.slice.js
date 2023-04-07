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
    addData(state, action) {
      const newData = {
        id: state.data.length + 1,
        title: action.payload,
        completed: false,
      };
      state.data = [...state.data, newData];
    },
  },
});

export const { fetchTodo, addData } = TodoSlice.actions;
export default TodoSlice;
