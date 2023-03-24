import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ListDetail = (props) => {
  const { state } = useLocation();

  console.log(state);
  return (
    <>
      <h1>Title: {state.title}</h1>
      <p>Completed: {state.completed.toString().toUpperCase()}</p>
      <hr />
      <p>Description:{state.description}</p>
    </>
  );
};

export default ListDetail;
