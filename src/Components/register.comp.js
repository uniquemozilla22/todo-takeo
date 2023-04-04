import { Alert, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import axiosBase from "../axiosBase";
import { FormInner, FormWrapper, Headings } from "../styled/styled";
import { useSelector } from "react-redux";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const token = useSelector((state) => state.users);
  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(username, password);
  };
  const registerUser = async (username, password) => {
    if (!username || !password) {
      setError("Fields should not be empty");
      if (success.length > 0) setSuccess("");
      return;
    }
    const { data } = await axiosBase.post("register", {
      username,
      password,
    });
    setUsername("");
    setPassword("");
    if (data.error) {
      setError(data.message);
      if (success.length > 0) setSuccess("");
      return;
    } else {
      setSuccess(data.message);
      if (error.length > 0) setError("");
    }
  };
  return (
    <FormWrapper>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <Headings>Register New Account</Headings>
      <FormInner onSubmit={handleSubmit}>
        {/* <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        /> */}
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
        <Button variant="contained" type="submit">
          Create Account
        </Button>
      </FormInner>
      <p>
        Already have an account ? <Link to="/login">Log In Now</Link>
      </p>
    </FormWrapper>
  );
};

export default RegisterForm;
