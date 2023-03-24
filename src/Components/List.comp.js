import { CheckBox, DeleteOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconContainer, ListingContainer } from "./../styled/styled";

const Listing = (props) => {
  const navigate = useNavigate();

  const navigateToDetail = (e) => navigate("/detail");
  return (
    <ListingContainer completed={props.completed} to={"/detail"}>
      <h1>{props.title}</h1>
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
