import { Router } from "express";
import { VerifyLogin } from "../../controllers/Authentication/Login.controller.js";
import { generateToken } from "../../services/jsonwebtoken.js";
import { comparePassword, encryptPassword } from "../../services/bcrypt.js";

const LoginRotuer = Router();

// localhost:8000/login
LoginRotuer.post("/", async (req, res) => {
  const { username, password } = req.body;

  const encryptedPassword = await encryptPassword(password);

  console.log(encryptedPassword);

  const isSamePassword = await comparePassword(password, encryptedPassword);

  console.log(isSamePassword);

  const user = await VerifyLogin(username, password);
  if (!user) {
    res.send({ error: true, status: 404, message: "User Not Found " });
    return;
  }
  console.log(user);
  const token = generateToken(user);
  res.send({
    error: false,
    status: 200,
    message: "User Found",
    data: { token },
  });
});

export default LoginRotuer;
