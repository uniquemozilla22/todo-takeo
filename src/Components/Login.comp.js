import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";

const LoginComponent = () => {
  return (
    <Container onSubmit={() => {}}>
      <h1>Login</h1>
      <TextField placeholder="Username" onChange={() => {}} />
      <TextField placeholder="password" onchange={() => {}} />
      <Button>Submit</Button>
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
