import { Alert, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import React, { useState } from "react";
import axiosBase from "./../axiosBase.js";
import { Layout } from "./Layout.js";
import { useDispatch } from "react-redux";
import { LoginActions } from "../store/slice/UserSlice/User.slice.js";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postLogin(username, password);
  };

  const postLogin = async (username, password) => {
    const { data } = await axiosBase.post("login", {
      username,
      password,
    });

    const token = data.data.token;

    dispatch(LoginActions(token));
  };

  return (
    <Layout>
      <Container onSubmit={handleSubmit}>
        <Alert />
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
    </Layout>
  );
};

const Container = styled("form")((props) => ({
  display: "grid",
  gap: "1rem",
  margin: "auto",
  placeItems: "center",
}));

export default LoginComponent;
