import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBase from "../../../axiosBase";

export const fetchData = createAsyncThunk(
  "todo/fetch",
  async (arg, { dispatch }) => {
    try {
      const response = await axiosBase().get("todo/getdata");
      const data = response.data;

      return data;
    } catch (e) {
      console.log({ ...e });
      if (e.response.data.error) {
        return {
          error: true,
          status: e.response.status,
          message: e.response.data.message,
        };
      }
    }
  }
);

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    isLoading: false,
    error: false,
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
    completeTask(state, action) {
      let copyData = state.data;
      let indexOfTaskToBeCompleted = copyData.findIndex(
        (task) => task.id === action.payload
      );
      copyData[indexOfTaskToBeCompleted].completed =
        !copyData[indexOfTaskToBeCompleted].completed;
      state.data = copyData;
    },
    deleteTask(state, action) {
      let copyData = state.data;
      let filteredData = copyData.filter(
        (dataTask) => dataTask.id !== action.payload
      );
      state.data = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      console.log("pending");
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { fetchTodo, addData, completeTask, deleteTask } =
  TodoSlice.actions;
export default TodoSlice;
