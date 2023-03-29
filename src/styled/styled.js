import styled from "@emotion/styled";

// THis is the concept of "styled-comnponent"

export const BoxTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(39, 116, 255, 1) 0%,
    rgba(179, 39, 252, 1) 100%
  );
  align-items: center;
  justify-content: center;
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

export const FormWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minWidth: "min(25rem,100%)",
  background: "white",
  boxShadow: "0 2px 3px rgba(0, 0, 0, 0.3)",

  padding: "1rem",
  gap: "2rem",
  borderRadius: "0.5rem",
  "& p": {
    fontSize: "1rem",

    "& a": {
      textDecoration: "none",
      fontSize: "1rem",
      color: "#448bfe",
      display: "inline-block",

      "&::after": {
        content: '" "',
        width: "100%",
        height: "3px",
        background: "#c52efc",
        opacity: "0",
        display: "block",
        transition: "0.35s",
      },
      "&:hover::after": {
        opacity: "1",
      },
    },
  },
}));

export const FormInner = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "80%",
  "& .MuiOutlinedInput-root": {},
  "& button": {
    background:
      "linear-gradient(90deg, rgba(39,159,255,1) 0%, rgba(207,39,252,1) 96%)",
    fontWeight: "400",
    padding: "0.8rem 0.6rem",

    "&:hover": {
      background:
        "radial-gradient(circle, rgba(39,159,255,1) 0%, rgba(207,39,252,1) 100%)",
    },
  },
}));
export const Headings = styled("h1")(() => ({
  display: "block",
  color: "#353535",
}));

export const Navi = styled("nav")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "5rem",
  "& ul": {
    display: "flex",
    listStyle: "none",
    fontSize: "1.2rem",
    "& li": {
      marginLeft: "1rem",

      "& a": {
        textDecoration: "none",
        color: "#ffffff",
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        fontWeight: "300",
        "&:hover": {
          background: "rgba(255,255,255,0.2)",
        },
      },
    },
  },
}));
