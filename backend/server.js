import express from "express";
import connect_to_database from "./database/database_connection";
import TodoRouter from "./todo";
const app = express();

// This is used for importing value of the variables from .env file
require("dotenv").config();

connect_to_database();

app.use("/todo", TodoRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running ${port}`);
});
