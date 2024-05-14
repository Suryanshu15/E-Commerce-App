import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser)

router.route("/login").post(adminLogin)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)

export default router;