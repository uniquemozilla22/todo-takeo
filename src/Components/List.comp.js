import { CheckBox, DeleteOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { IconContainer, ListingContainer } from "./../styled/styled";

const Listing = (props) => {
  return (
    <ListingContainer completed={props.completed}>
      <h1>{props.title}</h1>
      <IconContainer>
        <Button variant="text">
          <CheckBox />
        </Button>
        <Button variant="text">
          <DeleteOutlined />
        </Button>
      </IconContainer>
    </ListingContainer>
  );
};

export default Listing;
