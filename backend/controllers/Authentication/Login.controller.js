import Users from "./../../database/Schema/Users.schema.js";

export const VerifyLogin = async (username) => {
  const user = await Users.findOne({ username });

  if (!user) return;

  return user;
};
