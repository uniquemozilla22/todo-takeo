import { Router } from "express";
import { LoginPost } from "../../controllers/Authentication/Login.controller.js";
import isUser from "../../middleware/isUser.middleware.js";

const LoginRotuer = Router();

// localhost:8000/login
LoginRotuer.post("/", LoginPost);

export default LoginRotuer;
