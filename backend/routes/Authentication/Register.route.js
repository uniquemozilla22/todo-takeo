import { Router } from "express";

const RegisterRotuer = Router();

// /register
RegisterRotuer.post("/", RegisterPost);

export default RegisterRotuer;
