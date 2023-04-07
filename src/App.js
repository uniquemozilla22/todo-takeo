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
import { addData, fetchTodo } from "./store/slice/TodoSlice/Todo.slice.js";

function App() {
  const { data } = useSelector((state) => state.todo);

  const deleteData = (id) => {
    let copyData = data;
    let filteredData = copyData.filter((dataTask) => dataTask.id !== id);
    //setData([...filteredData]);
  };

  const completeTask = (id) => {
    let copyData = data;
    let indexOfTaskToBeCompleted = copyData.findIndex((task) => task.id === id);
    copyData[indexOfTaskToBeCompleted].completed =
      !copyData[indexOfTaskToBeCompleted].completed;
    //setData([...copyData]);
  };

  const listing = () =>
    data ? (
      data.map((task, index) => {
        return (
          <Listing
            key={index}
            onDelete={() => deleteData(task.id)}
            onComplete={() => completeTask(task.id)}
            {...task}
          />
        );
      })
    ) : (
      <h1 onClick={fetchData}>Loading...</h1>
    );

  const fetchData = async () => {
    const { data: response } = await axiosBase().get("todo/getdata");
    dispatch(fetchTodo(response.data));
  };

  useEffect(() => fetchData, []);

  const dispatch = useDispatch();

  return (
    <BoxTodoContainer>
      <ul>
        <Link to={"."}>Home</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </ul>
      <button onClick={fetchData}>Fetch</button>
      <button onClick={() => dispatch(LoginActions("abcd"))}>
        Change Login
      </button>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <InputComponent addData={(title) => dispatch(addData(title))} />
              {listing()}
            </>
          }
        />
        <Route path="/detail" Component={ListDetail} />
        <Route path="/login" Component={LoginComponent} />
        <Route path="/register" Component={RegisterComponent} />
      </Routes>
    </BoxTodoContainer>
  );
}

export default App;
