import Users from "../../database/Schema/Users.schema";
import { encryptPassword } from "../../services/bcrypt";
import { VerifyLogin } from "./Login.controller";

const RegisterPost = async (req, res) => {
  const { username, password } = req.body;

  const gotUser = await VerifyLogin(username);

  if (gotUser) {
    res.send({
      error: true,
      status: 500,
      message: "User Already Creted",
      data: { ...gotUser },
    });
    return;
  }

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
};

export default RegisterPost;
