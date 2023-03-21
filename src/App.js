import React, { useEffect, useState } from "react";
import Listing from "./Components/List.comp.js";
import axios from "axios";
import { InputComponent } from "./Components/Input.comp.js";
import { BoxTodoContainer } from "./styled/styled";
import MockData from "./data.json";

// requirements

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: true,
    },
  ]);
  const [count, setCount] = useState(0);

  const addData = (id, title) => {
    const newData = {
      id: id,
      title: title,
      completed: false,
    };
    // let newDataArr = data.push(newData);
    // setData(newDataArr);

    setData([...data, newData]);
  };

  const deleteData = (id) => {
    let copyData = data;

    //delete copyData[index];
    let filteredData = copyData.filter((dataTask) => dataTask.id !== id);

    console.group(filteredData);

    setData([...filteredData]);
  };

  const completeTask = (id) => {
    let copyData = data;
    let indexOfTaskToBeCompleted = copyData.findIndex((task) => task.id === id);
    copyData[indexOfTaskToBeCompleted].completed = true;
  };

  const setTaskUnCompleted = (id) => {};

  // useEffect(() => {
  //   deleteData(2);
  // }, []);

  return (
    <BoxTodoContainer>
      <InputComponent />
      {data.map((task, index) => {
        return (
          <Listing key={index} title={task.title} completed={task.completed} />
        );
      })}
    </BoxTodoContainer>
  );
}

export default App;
