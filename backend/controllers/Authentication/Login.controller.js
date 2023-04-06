import { comparePassword, encryptPassword } from "../../services/bcrypt.js";
import { generateToken } from "../../services/jsonwebtoken.js";
import Users from "./../../database/Schema/Users.schema.js";

export const VerifyLogin = async (username) => {
  const user = await Users.findOne({ username });
  if (!user) return;
  return user;
};

export const LoginPost = async (req, res) => {
  let { username, password } = req.body;
  const user = await VerifyLogin(username);

  if (!user) {
    res.send({ error: true, status: 404, message: "User Not Found " });
    return;
  }
  const isSamePassword = await comparePassword(password, user.password);

  if (!isSamePassword) {
    res.send({
      error: true,
      status: 404,
      message: "Login error, Password dont match",
    });
  }

  const token = generateToken({
    username: user.username,
    password: user.password,
    id: user.id,
  });

  res.send({
    error: false,
    status: 200,
    message: "User Found",
    data: { token },
  });
};
