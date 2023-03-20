import React, { useEffect, useState } from "react";
import Listing from "./Components/List.comp.js";
import axios from "axios";
import { InputComponent } from "./Components/Input.comp.js";
import { BoxTodoContainer } from "./styled/styled";

// requirements

/**
 *
 * 1. looking at the different api calls that we can make
 * 2. what kind of library are there to fetch the data
 * 3. fetching a data and showing it into the console
 * 4. we will be looking at managing states through redux (bonus)
 *
 */

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
  return (
    <BoxTodoContainer>
      <InputComponent />
      <Listing title={"Task 1"} completed={false} />
      <Listing title={"Task 2"} completed={true} />
    </BoxTodoContainer>
  );
}

export default App;
