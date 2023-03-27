const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send({ status: 300, message: "Hello! This is the api." });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running ${port}`);
});
