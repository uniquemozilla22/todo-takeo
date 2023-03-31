import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { FormInner, FormWrapper, Headings } from "../styled/styled";
import axiosBase from "../axiosBase";
import { useState } from "react";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postLogin(username, password);
  };

  const postLogin = async (username, password) => {
    const { data } = await axiosBase.post("login", {
      username,
      password,
    });
    setUsername("");
    setPassword("");
    console.log(data);
    if (data.error) {
      setError(data.message);
      return;
    }
    if (error.length > 0) setError("");
  };
  return (
    <FormWrapper>
      {error && <Alert severity="error">{error}</Alert>}
      <Headings>Account Login</Headings>

      <FormInner onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submmit" variant="contained">
          Login
        </Button>
      </FormInner>
      <p>
        Create an account ? <Link to="/register">Sign Up Now</Link>
      </p>
    </FormWrapper>
  );
};

export default LoginForm;
