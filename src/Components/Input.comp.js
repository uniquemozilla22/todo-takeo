import React from "react";
import { Button, TextField } from "@mui/material";
import { InputContainer } from "./../styled/styled";

export const InputComponent = (props) => {
  return (
    <InputContainer>
      <TextField id="filled-title" label="Title" variant="filled" />
      <Button variant="outlined">Submit</Button>
    </InputContainer>
  );
};
