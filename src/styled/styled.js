import styled from "@emotion/styled";

// THis is the concept of "styled-comnponent"

export const BoxTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6.5rem;
`;

// export const InputContainer = styled.form`
//   display: flex;
//   justify-content: space-between;
//   background: white;
// `;
export const InputContainer = styled("form")(() => ({
  display: "flex",
  gap: "1rem",
  padding: "1rem",
  alignItems: "center",
  flexDirection: "column",
  "& h2": {
    fontWeight: "600",
    fontSize: "2rem",
    color: "#353535",
  },
}));
export const ListingContainer = styled("div")((props) => ({
  background: props.completed
    ? "linear-gradient(90deg, rgba(126,107,254,1) 0%, rgba(39,252,217,1) 100%)"
    : "linear-gradient(90deg, rgba(255,82,82,1) 0%, rgba(255,137,82,1) 100%)",
  margin: "1rem 0",
  width: "100%",
  padding: "1rem 0 ",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "0.5rem",
  "& h2": {
    cursor: "pointer",
    paddingLeft: "0.5rem",
  },
  "&:hover": {
    boxShadow: "4px 0  10px #2b2b2b80",

    color: "white",
  },
  "& svg": {
    color: props.completed ? "white" : "red",
    "&:hover": {
      color: "red",
    },
  },
}));

export const ListingWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  flexWrap: "wrap",
  minWidth: "25rem",
  padding: "1rem",

  borderRadius: "0.5rem",
  boxShadow: "0 2px 3px rgba(0, 0, 0, 0.3)",
}));

export const FieldsetWrapper = styled("fieldset")(() => ({
  display: "flex",
  border: "none",
  "& button": {
    background:
      "linear-gradient(90deg, rgba(39,159,255,1) 0%, rgba(207,39,252,1) 96%)",
    fontWeight: "400",
    color: "#ffffff",
    border: "none",
    borderRadius: "0",
    padding: "0 1.75rem",
    "&:hover": {
      border: "none",
      background:
        "radial-gradient(circle, rgba(39,159,255,1) 0%, rgba(207,39,252,1) 100%)",
    },
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
      color: "#2F99FF",
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

  position: "fixed",
  width: "100%",
  zIndex: "999",
  height: "5rem",
  background: "rgba( 255, 255, 255, 0.15 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
  backgropFilter: "blur( 20px )",
  top: "0",
  left: "0",
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

export const DetailsContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#ffffff",
  padding: "1rem",
  borderRadius: "0.5rem",
  minWidth: "25rem",
}));
