import express from "express";
import { connectDatabase } from "./database/database_connection.js";
import TodoRouter from "./routes/Todo/todo.route.js";
import dotenv from "dotenv";

// Application Started
const app = express();

// This is used for importing value of the variables from .env file
dotenv.config();

connectDatabase();

app.use("/todo", TodoRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running ${port}`);
});
