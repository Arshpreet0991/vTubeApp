import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

// create a router
const router = Router();
router.route("/register").post(registerUser);

export default router;
