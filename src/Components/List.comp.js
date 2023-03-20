import React from "react";

const Listing = (props) => {
  return (
    <div>
      <h1>{props.list.title}</h1>
      <p>{props.list.completed.toString()}</p>
    </div>
  );
};




export default Listing;
