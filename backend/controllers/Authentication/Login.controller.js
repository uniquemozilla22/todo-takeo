import Users from "./../../database/Schema/Users.schema.js";

export const VerifyLogin = async (username, password) => {
  const user = await Users.find({ username, password });

  if (!user.length) return;

  return user;
};
