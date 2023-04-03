import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import {
  FieldsetWrapper,
  InputContainer,
  WrapperDiv,
} from "./../styled/styled";

export const InputComponent = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addData(title);
    setTitle("");
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <h2> Add Task</h2>
      <FieldsetWrapper>
        <TextField
          id="filled-title"
          label="Title"
          variant="filled"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <Button variant="outlined" type="submit">
          Add
        </Button>
      </FieldsetWrapper>
    </InputContainer>
  );
};
