import { CheckBox, DeleteOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconContainer, ListingContainer } from "./../styled/styled";

const Listing = (props) => {
  const navigate = useNavigate();

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
    <ListingContainer completed={props.completed} key={props.id}>
      <h2 onClick={(e) => navigateToDetail(e)}>{props.title}</h2>

      <IconContainer>
        <Button variant="text">
          <CheckBox onClick={() => props.onComplete()} />
        </Button>
        <Button variant="text">
          <DeleteOutlined onClick={() => props.onOpen()} />
        </Button>
      </IconContainer>
    </ListingContainer>
  );
};

export default Listing;
