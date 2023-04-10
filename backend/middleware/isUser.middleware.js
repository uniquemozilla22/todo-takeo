import { verifyToken } from "../services/jsonwebtoken.js";
import Users from "./../database/Schema/Users.schema.js";

const isUser = (req, res, next) => {
  const BearerToken = req.headers["authorization"];

  if (!BearerToken) {
    res.send(noTokenResponse);
    return;
  }
  const token = splitToken(BearerToken);

  if (!token) {
    res.status(498).send(noTokenResponse);
    return;
  }
  try {
    const { iat, exp, ...rest } = verifyToken(token);

    // Check the the user is correct or not

    const UserInDatabase = Users.findOne({ ...rest });

    if (!UserInDatabase) {
      res.status(498).send({
        error: true,
        status: 498,
        message: "User is not correct  ,Invalid Token: Login again",
      });
      return;
    }
    next();
  } catch (e) {
    res.status(498).send({
      error: true,
      status: 498,
      message: "Could not verify the user , Please login again",
    });
    return;
  }
};

const splitToken = (bearer) => bearer?.split(" ")[1] || null;

const noTokenResponse = {
  error: true,
  status: 498,
  message: "Could not verify the user , No token: Login again",
};
export default isUser;
