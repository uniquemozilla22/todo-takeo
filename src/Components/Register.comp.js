import React from "react";
import { Layout } from "./Layout";
import { Button, TextField } from "@mui/material";
import axiosBase from "../axiosBase";
import { useState } from "react";
import styled from "@emotion/styled";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not same ");
      return;
    }
    await postRegister(username, password);
  };

  const postRegister = async (username, password) => {
    const { data } = await axiosBase.post("register", {
      username,
      password,
    });
  };

  return (
    <Layout>
      <Container onSubmit={handleSubmit}>
        <h1>Register</h1>
        <TextField
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Container>
    </Layout>
  );
};

export default RegisterComponent;
const Container = styled("form")((props) => ({
  display: "grid",
  gap: "1rem",
  margin: "auto",
  placeItems: "center",
}));
