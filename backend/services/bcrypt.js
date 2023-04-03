import bcrypt from "bcryptjs";

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(+process.env.SALT_BCRYPT);
  const encrypted_password = await bcrypt.hash(password, salt);
  return encrypted_password;
};

export const comparePassword = async (password, encryptedpassword) => {
  const isEqual = await bcrypt.compare(password, encryptedpassword);
  return isEqual;
};
