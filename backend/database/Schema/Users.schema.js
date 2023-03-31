import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
  username: String,
  password: String,
});

const Users = model("users", UsersSchema);

export default Users;
