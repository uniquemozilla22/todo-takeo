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

  const addData = (title) => {
    const newData = {
      id: data.length + 1,
      title: title,
      completed: false,
    };
    // let newDataArr = data.push(newData);
    // setData(newDataArr);

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

  // const setTaskUnCompleted = (id) => {
  //   let copyData = data;
  //   let indexOfTaskToBeCompleted = copyData.findIndex((task) => task.id === id);
  //   copyData[indexOfTaskToBeCompleted].completed = false;
  //   setData([...copyData]);
  // };

  // useEffect(() => {
  //   addData(14, "task 3");
  // }, []);
  // console.log(data);

  return (
    <BoxTodoContainer>
      <InputComponent addData={addData} />
      {data.map((task, index) => {
        return (
          <Listing
            key={index}
            title={task.title}
            completed={task.completed}
            onDelete={() => deleteData(task.id)}
            onComplete={() => completeTask(task.id)}
          />
        );
      })}
    </BoxTodoContainer>
  );
}

export default App;
