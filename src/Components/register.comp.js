import { Button, TextField } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { FormInner, FormWrapper, Headings } from "../styled/styled";

const RegisterForm = () => {
  return (
    <FormWrapper>
      <Headings>Register New Account</Headings>
      <FormInner>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button variant="contained">Create Account</Button>
      </FormInner>
      <p>
        Already have an account ? <Link to="/login">Log In Now</Link>
      </p>
    </FormWrapper>
  );
};

export default RegisterForm;
