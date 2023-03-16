import React from "react";

const Listing = (yogesh) => {
  return (
    <div>
      <h1>{yogesh.list.name}</h1>
      <p>{yogesh.list.description}</p>
    </div>
  );
};

export default Listing;
