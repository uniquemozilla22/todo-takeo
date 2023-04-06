import express from "express";
import isUser from "../../middleware/isUser.middleware.js";

const data = [
  {
    id: 1,
    title: "Task 1",
    description: "this is the main task 1",
    completed: true,
  },
  {
    id: 4,
    title: "Task 4",
    description: "this is the main task 4",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "this is the main task 2",
    completed: true,
  },
  {
    id: 3,
    title: "Task 3",
    description: "this is the main task 3",
    completed: true,
  },
];

const TodoRouter = express.Router();

const returnData = (req, res) => {
  console.log("Hey I am called");
  res.send({
    error: false,
    status: 200,
    message: "Data Fetched",
    data,
  });
};

TodoRouter.get("/getdata", isUser, returnData);

export default TodoRouter;
