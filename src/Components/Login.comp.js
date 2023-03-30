import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import React, { useState } from "react";
import axiosBase from "./../axiosBase.js";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postLogin(username, password);
  };

  const postLogin = async (username, password) => {
    const { data } = await axiosBase.post("login", {
      username,
      password,
    });
    console.log(data);
    alert(data.message);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h1>Login</h1>
      <TextField
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Container>
  );
};

const Container = styled("form")((props) => ({
  display: "grid",
  gap: "1rem",
  margin: "auto",
  placeItems: "center",
}));

export default LoginComponent;
