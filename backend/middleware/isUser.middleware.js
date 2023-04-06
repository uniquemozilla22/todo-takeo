import { verifyToken } from "../services/jsonwebtoken.js";

const isUser = (req, res, next) => {
  const BearerToken = req.headers["authorization"];

  if (!BearerToken) {
    res.send(noTokenResponse);
    return;
  }
  const token = splitToken(BearerToken);

  if (!token) {
    res.send(noTokenResponse);
    return;
  }
  try {
    const verifyTokenString = verifyToken(token);
    next();
  } catch (e) {
    res.send({
      error: true,
      status: 500,
      message: "Could not verify the user , Please login again",
    });
    return;
  }
};

const splitToken = (bearer) => bearer?.split(" ")[1] || null;

const noTokenResponse = {
  error: true,
  status: 500,
  message: "Could not verify the user , No token: Login again",
};
export default isUser;
