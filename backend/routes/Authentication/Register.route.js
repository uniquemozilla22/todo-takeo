import { Router } from "express";
import Users from "../../database/Schema/Users.schema.js";
import { encryptPassword } from "./../../services/bcrypt.js";

const RegisterRotuer = Router();

// /register
RegisterRotuer.post("/", async (req, res) => {
  const { username, password } = req.body;

  const encrypted_Password = await encryptPassword(password);

  const user = new Users({ username, password: encrypted_Password });

  user.save().then((response) => {
    res.send({
      error: false,
      status: 200,
      message: "User Created",
      data: { ...user },
    });
  });
});

export default RegisterRotuer;
