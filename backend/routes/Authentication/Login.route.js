import { Router } from "express";
import { VerifyLogin } from "../../controllers/Authentication/Login.controller.js";

import { comparePassword } from "../../services/bcrypt.js";
import { generateToken } from "../../services/jwt.js";

const LoginRotuer = Router();

// localhost:8000/login
LoginRotuer.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await VerifyLogin(username);

  if (!user) {
    res.send({ error: true, status: 404, message: "User Not Found " });
    return;
  }
  const isSamePassword = await comparePassword(password, user.password);
  if (!isSamePassword) {
    res.send({ error: true, status: 404, message: "Password do not match" });
    return;
  }
  const token = generateToken({
    username: user.username,
    id: user.id,
  });
  res.send({
    error: false,
    status: 200,
    data: { token },
    message: "User Found",
  });
});

// Create a login/verify route and
// call the verify function for username and password passed
//  into it console.log the response

// LoginRotuer.post("/verify", async (req, res) => {
//   const { username, password: unencrypted_pass } = req.body;

//   let password = await encryptPassword(unencrypted_pass);
//   console.log(password);
//   const user = await VerifyLogin(username, password);

//   const isSamePassword = await comparePassword(unencrypted_pass, password);
//   if (!isSamePassword) {
//     console.log({ error: true, status: 404, message: "Incorrect password " });
//     return;
//   }

//   if (!user) {
//     console.log({ error: true, status: 404, message: "User Not Found " });
//     return;
//   }

//   console.log({ error: false, status: 200, message: "User Found" });
// });

export default LoginRotuer;
