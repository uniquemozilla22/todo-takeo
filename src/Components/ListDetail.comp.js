import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DetailsContainer } from "./../styled/styled";
const ListDetail = (props) => {
  const { state } = useLocation();

  console.log(state);
  return (
    <DetailsContainer>
      <h1>Title: {state.title}</h1>
      <p>Completed: {state.completed.toString().toUpperCase()}</p>
      <hr />
      <p>Description:{state.description}</p>
    </DetailsContainer>
  );
};

export default ListDetail;
