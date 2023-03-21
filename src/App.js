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
      title: "Task 2",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: true,
    },
  ]);
  const [count, setCount] = useState(0);

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
let array_of_data = [1, 2, 3, 4, 5, 6, 7];

console.log(array_of_data);

// for loop implementation
// for (let i = 0; i < array_of_data.length; i++) {
//   array_of_data[i] += 2;
// }

const updated_array = array_of_data.map((item, index) => {
  item = item + 2;
  return item;
});

console.log(updated_array);

export default App;
