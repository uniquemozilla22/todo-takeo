import React, { useState } from "react";
import Listing from "./Components/List.comp.js";
// import axios from "axios";
import { InputComponent } from "./Components/Input.comp.js";
import { BoxTodoContainer } from "./styled/styled";
import MockData from "./data.json";
import ListDetail from "./Components/ListDetail.comp.js";
import { Route, Routes, Link } from "react-router-dom";
import LoginComponent from "./Components/Login.comp.js";

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
    <BoxTodoContainer>
      <ul>
        <Link to={"."}>Home</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/login"}>Login</Link>
      </ul>
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
        <Route path="/login" Component={LoginComponent} />
      </Routes>
    </BoxTodoContainer>
  );
}

export default App;
