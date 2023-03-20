import React, { useEffect, useState } from "react";
import Listing from "./Components/List.comp.js";
import axios from "axios";
const MockData = require("./data.json");

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
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    // fetch Function
    // let dataFetch = await fetch("https://jsonplaceholder.typicode.com/todos");
    // dataFetch = await dataFetch.json();

    // axios fetch
    let dataFetch = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    console.log(dataFetch.data);
    setData(dataFetch.data);
  };

  // Hint use useEffect

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log("count:" + count);

  const listing = () => {
    if (!data) return <h1>Loading...</h1>;

    return data.map((listingdata, index) => {
      return <Listing key={index} list={listingdata} />;
    });
  };

  return (
    <div className="App">
      <button onClick={() => fetchData()}>Fetch Data</button>
      {listing()}
    </div>
  );
}

export default App;
