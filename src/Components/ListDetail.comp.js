import React from "react";

const ListDetail = (props) => {
  return (
    <>
      <h1>Title: {props.title}</h1>
      <p>Completed: {props.completed.toString().toUpperCase()}</p>
      <hr />
      <p>Description:{props.description}</p>
    </>
  );
};

export default ListDetail;
