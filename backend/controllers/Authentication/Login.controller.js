import { comparePassword, encryptPassword } from "../../services/bcrypt.js";
import { generateToken } from "../../services/jsonwebtoken.js";
import Users from "./../../database/Schema/Users.schema.js";

export const VerifyLogin = async (...rest) => {
  const user = await Users.find({ ...rest });
  if (!user.length) return;
  return user;
};

export const LoginPost = async (req, res) => {
  let { username, password: unecrypted_password } = req.body;

  let password = await encryptPassword(unecrypted_password);
  const user = await VerifyLogin(username, password);
  const isSamePassword = await comparePassword(unecrypted_password, password);

  if (!isSamePassword) {
    res.send({
      error: true,
      status: 404,
      message: "Login error, Password dont match",
    });
  }

  if (!user) {
    res.send({ error: true, status: 404, message: "User Not Found " });
    return;
  }
  const token = generateToken(user);
  res.send({
    error: false,
    status: 200,
    message: "User Found",
    data: { token },
  });
};
