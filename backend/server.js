const express = require("express");
const TodoRouter = require("./todo");

const app = express();

app.use("/todo", TodoRouter);

// ------------Task_____________
// Create a /hello router
//  - get of /world that will respond me "hello"

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running ${port}`);
});
