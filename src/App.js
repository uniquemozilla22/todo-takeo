import React, { useState } from "react";
import Listing from "./Components/List.comp.js";
// import axios from "axios";
import { InputComponent } from "./Components/Input.comp.js";
import { BoxTodoContainer } from "./styled/styled";
import MockData from "./data.json";

// requirements

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
