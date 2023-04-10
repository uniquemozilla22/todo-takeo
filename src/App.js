import React, { useCallback, useEffect, useState } from "react";
import Listing from "./Components/List.comp.js";
// import axios from "axios";
import { InputComponent } from "./Components/Input.comp.js";
import { BoxTodoContainer } from "./styled/styled";
import MockData from "./data.json";
import ListDetail from "./Components/ListDetail.comp.js";
import { Route, Routes, Link } from "react-router-dom";
import LoginComponent from "./Components/Login.comp.js";
import RegisterComponent from "./Components/Register.comp.js";
import axiosBase from "./axiosBase.js";
import { useDispatch, useSelector } from "react-redux";
import { LoginActions } from "./store/slice/UserSlice/User.slice.js";
import {
  addData,
  fetchData,
  fetchTodo,
  deleteTask,
  completeTask,
} from "./store/slice/TodoSlice/Todo.slice.js";

function App() {
  const { data, isLoading } = useSelector((state) => state.todo);
  const { token } = useSelector((state) => state.users);

  const listing = (loader) => {
    return !loader ? (
      data.map((task, index) => {
        return (
          <Listing
            key={index}
            onDelete={() => dispatch(deleteTask(task.id))}
            onComplete={() => dispatch(completeTask(task.id))}
            {...task}
          />
        );
      })
    ) : (
      <h1 onClick={() => dispatch(fetchData())}>Loading...</h1>
    );
  };

  // const dispatch(fetchData()) = async () => {
  //   const { data: response } = await axiosBase().get("todo/getdata");
  //   dispatch(fetchTodo(response.data));
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BoxTodoContainer>
      <ul>
        <Link to={"."}>Home</Link>
        <Link to={"/detail"}>Detail</Link>
        {!token && (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </>
        )}
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <InputComponent addData={(title) => dispatch(addData(title))} />
              {listing(isLoading)}
            </>
          }
        />
        {!token && (
          <>
            <Route path="/login" Component={LoginComponent} />
            <Route path="/register" Component={RegisterComponent} />
          </>
        )}
      </Routes>
    </BoxTodoContainer>
  );
}

export default App;
