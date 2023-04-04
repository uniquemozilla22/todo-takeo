import { Router } from "express";
import { LoginPost } from "../../controllers/Authentication/Login.controller.js";

const LoginRotuer = Router();

// localhost:8000/login
LoginRotuer.post("/", LoginPost);

export default LoginRotuer;
