import { CheckBox, DeleteOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconContainer, ListingContainer } from "./../styled/styled";

const Listing = (props) => {
  const navigate = useNavigate();

  console.log(props);

  const navigateToDetail = (e) => {
    navigate("/detail", {
      state: {
        title: props.title,
        completed: props.completed,
        description: props.description,
      },
    });
  };

  return (
    <ListingContainer completed={props.completed}>
      <h1 onClick={(e) => navigateToDetail(e)}>{props.title}</h1>
      <h1>hi</h1>
      <IconContainer>
        <Button variant="text">
          <CheckBox onClick={() => props.onComplete()} />
        </Button>
        <Button variant="text">
          <DeleteOutlined onClick={() => props.onDelete()} />
        </Button>
      </IconContainer>
    </ListingContainer>
  );
};

export default Listing;
