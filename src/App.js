import React, { useState, useEffect } from "react";
import Listing from "./Components/List.comp.js";
// import axios from "axios";
import { InputComponent } from "./Components/Input.comp.js";
import { BoxTodoContainer, ListingWrap, MainRoot, Navi } from "./styled/styled";
import MockData from "./data.json";
import ListDetail from "./Components/ListDetail.comp.js";
import { Route, Routes, Link } from "react-router-dom";
import LoginForm from "./Components/login.comp.js";
// import { createTheme, ThemeProvider, Typography } from "@mui/material";

import RegisterForm from "./Components/register.comp.js";
import { Global } from "@emotion/react";
import { Dialog } from "@mui/material";
import Confirmation from "./Components/Dialog.comp.js";

function App() {
  const [data, setData] = useState(MockData);
  const [header, setHeader] = useState("header");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 48) {
      return setHeader("header");
    } else if (window.scrollY > 48) {
      return setHeader("header scrolling");
    }
  };
  // scroll effect on menu
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const addData = (title) => {
    if (!title.trim()) {
      alert(" Please Enter Task ");
      return;
    }
    const newData = {
      // set id based on last element id if exists or else id is set to 1
      id: data.length ? data[data.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    console.log(newData);
    setData([...data, newData]);
  };

  const deleteData = (id) => {
    let copyData = data;
    let filteredData = copyData.filter((dataTask) => dataTask.id !== id);
    setData([...filteredData]);
    // close confirmation modal after delete
    setOpen(false);
  };
  // close model cancel
  const handleClose = () => {
    setOpen(false);
  };
  // open confirmation before delete
  const openConfirmation = (id) => {
    setOpen(true);
    setId(id);
  };

  const completeTask = (id) => {
    let copyData = data;
    let indexOfTaskToBeCompleted = copyData.findIndex((task) => task.id === id);
    copyData[indexOfTaskToBeCompleted].completed =
      !copyData[indexOfTaskToBeCompleted].completed;
    setData([...copyData]);
  };

  const listing = () =>
    data.map((task, index) => {
      return (
        <Listing
          key={index}
          onComplete={() => completeTask(task.id)}
          onOpen={() => openConfirmation(task.id)}
          {...task}
        />
      );
    });

  return (
    <>
      <Navi className={header}>
        <ul className="">
          <li>
            <Link to={"."}>Home</Link>
          </li>
          {/* <li>
                <Link to={"/detail"}>Detail</Link>
              </li> */}

          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </Navi>
      <Global
        styles={{
          ":root": {
            fontFamily: `Oswald, sans-serif`,
          },
          body: {
            background:
              "linear-gradient(90deg,rgba(39, 116, 255, 1) 0%,rgba(179, 39, 252, 1) 100%)",
          },
          "nav.scrolling": {
            background: "rgba( 255, 255, 255, 0.9 )",
            transition: "0.35s",
            "& ul li a": {
              color: "rgb(199,45,252)",
              fontWeight: "700",
              "&:hover": {
                background: "rgb(81,132,255)",
                color: "#ffffff",
              },
            },
          },
        }}
      />
      <BoxTodoContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ListingWrap>
                  <InputComponent addData={addData} />
                  {listing()}
                  <Confirmation
                    open={open}
                    close={() => handleClose()}
                    onDelete={() => deleteData(id)}
                  />
                </ListingWrap>
              </>
            }
          />
          <Route path="/detail" Component={ListDetail} />
          <Route path="/login" Component={LoginForm} />
          <Route path="/register" Component={RegisterForm} />
          <Route
            path="/hi"
            element={
              <>
                <h1>Hi</h1>
              </>
            }
          />
        </Routes>
      </BoxTodoContainer>
    </>
  );
}

export default App;
