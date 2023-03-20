import styled from "@emotion/styled";

export const BoxTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  background-color: #fafafa;
  align-items: center;
  margin: auto;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListingContainer = styled.div((props) => ({
  border: "1px solid " + (props.completed ? "green" : "red"),
  margin: "1rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const IconContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
