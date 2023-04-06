import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(user, process.env.SECRET_JSON_WEB_TOKEN, {
    expiresIn: 60,
  });
};

export const verifyToken = (token, callback) => {
  return jwt.verify(token, process.env.SECRET_JSON_WEB_TOKEN, callback);
};
