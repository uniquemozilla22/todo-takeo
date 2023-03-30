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

export default LoginRotuer;
