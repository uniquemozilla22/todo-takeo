import { Button, TextField } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { FormInner, FormWrapper, Headings } from "../styled/styled";

const LoginForm = () => {
  return (
    <FormWrapper>
      <Headings>Account Login</Headings>
      <FormInner>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button variant="contained">Login</Button>
      </FormInner>
      <p>
        Create an account ? <Link to="/register">Sign Up Now</Link>
      </p>
    </FormWrapper>
  );
};

export default LoginForm;
