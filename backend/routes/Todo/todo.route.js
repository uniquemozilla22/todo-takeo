import express from "express";

const data = [
  {
    id: 1,
    title: "Task 1",
    description: "this is the main task 1",
    completed: true,
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
  res.send(data);
};

TodoRouter.get("/getdata", returnData);

export default TodoRouter;
