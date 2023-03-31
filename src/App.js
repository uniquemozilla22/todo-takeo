import React, { useState } from "react";
import Listing from "./Components/List.comp.js";
// import axios from "axios";
import { InputComponent } from "./Components/Input.comp.js";
import { BoxTodoContainer, Navi } from "./styled/styled";
import MockData from "./data.json";
import ListDetail from "./Components/ListDetail.comp.js";
import { Route, Routes, Link } from "react-router-dom";
import LoginForm from "./Components/login.comp.js";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import RegisterForm from "./Components/register.comp.js";
const theme = createTheme({
  typography: {
    fontFamily: ["Oswald, sans-serif"].join(","),
  },
});

function App() {
  const [data, setData] = useState(MockData);

  const addData = (title) => {
    const newData = {
      id: data.length + 1,
      title: title,
      completed: false,
    };
    console.log(newData);
    setData([...data, newData]);
  };

  const deleteData = (id) => {
    let copyData = data;
    let filteredData = copyData.filter((dataTask) => dataTask.id !== id);
    setData([...filteredData]);
  };

  const completeTask = (id) => {
    let copyData = data;
    let indexOfTaskToBeCompleted = copyData.findIndex((task) => task.id === id);
    copyData[indexOfTaskToBeCompleted].completed =
      !copyData[indexOfTaskToBeCompleted].completed;
    setData([...copyData]);
  };

  const listing = () =>
    data.map((task, index) => {
      return (
        <Listing
          key={index}
          onDelete={() => deleteData(task.id)}
          onComplete={() => completeTask(task.id)}
          {...task}
        />
      );
    });

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <BoxTodoContainer>
          <Navi>
            <ul className="">
              <li>
                <Link to={"."}>Home</Link>
              </li>
              {/* <li>
                <Link to={"/detail"}>Detail</Link>
              </li> */}

              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </ul>
          </Navi>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <InputComponent addData={addData} />
                  {listing()}
                </>
              }
            />
            <Route path="/detail" Component={ListDetail} />
            <Route path="/login" Component={LoginForm} />
            <Route path="/register" Component={RegisterForm} />
            <Route
              path="/hi"
              element={
                <>
                  <h1>Hi</h1>
                </>
              }
            />
          </Routes>
        </BoxTodoContainer>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
