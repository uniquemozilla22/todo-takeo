import { Router } from "express";
import { SaveUser } from "../../controllers/Authentication/Register.controller.js";

const RegisterRouter = Router();

RegisterRouter.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await SaveUser(username, password);
  if (!user) {
    res.send({ error: true, status: 403, message: "User Already Exists " });
    return;
  }

  res.send({
    error: false,
    status: 200,
    message: "User Registered Succesfully",
  });
});

export default RegisterRouter;
