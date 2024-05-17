import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addProduct, loginAdmin, logoutAdmin, registerAdmin } from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/register").post(registerAdmin)

router.route("/login").post(loginAdmin)

//secured routes
router.route("/logout").post(verifyJWT,logoutAdmin)
router.route("/add-product").post(
    upload.fields([
        {
            name: "productImage",
            maxCount: 1
        },
    ]),
    verifyJWT,
    addProduct
)


export default router;