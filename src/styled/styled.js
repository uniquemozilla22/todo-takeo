import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Layout } from "../Components/Layout";
// THis is the concept of "styled-comnponent"

export const BoxTodoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  background-color: #fafafa;
  align-items: center;
  margin: auto;
  overflow: hidden;
  overflow-y: auto;
`;

export const InputContainer = styled.form`
  display: flex;
  justify-content: center;
`;

export const ListingContainer = styled("div")((props) => ({
  background: props.completed ? "green" : "red",
  margin: "1rem",
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  "& h1": {
    cursor: "pointer",
  },
  "&:hover": {
    boxShadow: "4px 0  10px #2b2b2b80",

    color: "white",
  },
}));

export const IconContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
