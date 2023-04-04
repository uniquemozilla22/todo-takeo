import { Router } from "express";
import RegisterPost from "../../controllers/Authentication/Register.controller.js";

const RegisterRotuer = Router();

// /register
RegisterRotuer.post("/", RegisterPost);

export default RegisterRotuer;
