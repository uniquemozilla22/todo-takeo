import express from "express";
import connectDatabase from "./database/database_connection.js";
import TodoRouter from "./routes/Todo/todo.route.js";
import dotenv from "dotenv";
import LoginRotuer from "./routes/Authentication/Login.route.js";
import cors from "cors";
import bodyParser from "body-parser";

// Application Started
const app = express();

// This will allow only the port 3000 to connect with the backend
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

//this will allow any origins to connect
app.use(cors());

// This will make sure that the post data is on JSON format
app.use(bodyParser.json());

// This is used for importing value of the variables from .env file
dotenv.config();

connectDatabase();

app.use("/todo", TodoRouter);
app.use("/login", LoginRotuer);

/**
 *
 * Create a route to register the user with username and password
 * also it should check for the existance of the user in the database,
 *
 * 
//  * Create a frontend for that route and make sure that the 
    registration is working from the frontend to the backend
 */

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running ${port}`);
});
