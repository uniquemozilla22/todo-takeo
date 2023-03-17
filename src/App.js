import React, { useEffect, useState } from "react";
import Listing from "./Components/List.comp.js";

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

function App(props) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    let dataFetch = await fetch("https://jsonplaceholder.typicode.com/todos");
    dataFetch = await dataFetch.json();
    console.log(dataFetch);
    setData(dataFetch);
  };

  const listing = () => {
    if (!data) return <h1>Loading...</h1>;

    return data.map((listingdata, index) => {
      return <Listing list={listingdata} />;
    });
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData(MockData);
  //   }, 1000);
  // });

  // HTML tags
  // <div></div>
  // <h1></h1>

  // JSX Tags are defined by you specially

  return (
    <div className="App">
      <button onClick={() => fetchData()}>Fetch Data</button>
      {listing()}
    </div>
  );
}

export default App;
