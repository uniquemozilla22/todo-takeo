import { encryptPassword } from "../../services/bcrypt.js";
import Users from "./../../database/Schema/Users.schema.js";

export const SaveUser = async (username, password) => {
  // find by username
  const UserExists = await Users.findOne({ username });

  // return if user already exists
  if (UserExists && !UserExists.length) return;
  const encrypted_password = await encryptPassword(password);
  // if not proceed to register
  const user = new Users({
    username: username,
    password: encrypted_password,
  });
  await user.save();
  return user;
};
