import React, { useId, useState } from "react";
import { Button, TextField } from "@mui/material";
import { InputContainer } from "./../styled/styled";

export const InputComponent = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addData(title);
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <TextField
        id="filled-title"
        label="Title"
        variant="filled"
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </InputContainer>
  );
};
