import React, { useEffect, useState } from "react";
import Listing from "./Components/List.comp.js";
import MockData from "./data.json";

// requirements

/**
 *
 * 1. form that will take the input from the users
 * 2. we will be designing the application components
 * 3. we will be using useState and useEffect to render the application correctly
 * 4. we will make a splendid UI
 *
 */

function App(props) {
  const [data, setData] = useState(null);

  const listing = () => {
    if (!data) return <h1>Loading...</h1>;

    return data.map((listingdata, index) => {
      return <Listing list={listingdata} />;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setData(MockData);
    }, 1000);
  });

  // HTML tags
  // <div></div>
  // <h1></h1>

  // JSX Tags are defined by you specially

  return <div className="App">{listing()}</div>;
}

export default App;
