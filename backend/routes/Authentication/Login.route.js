import { Router } from "express";
import { VerifyLogin } from "../../controllers/Authentication/Login.controller.js";

const LoginRotuer = Router();

// localhost:8000/login
LoginRotuer.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await VerifyLogin(username, password);
  if (!user) {
    res.send({ error: true, status: 404, message: "User Not Found " });
    return;
  }
  res.send({ error: false, status: 200, message: "User Found" });
});

// Create a login/verify route and
// call the verify function for username and password passed
//  into it console.log the response

LoginRotuer.post("/verify", async (req, res) => {
  const { username, password } = req.body;

  const user = await VerifyLogin(username, password);

  if (!user) {
    console.log({ error: true, status: 404, message: "User Not Found " });
    return;
  }

  console.log({ error: false, status: 200, message: "User Found" });
});

export default LoginRotuer;
