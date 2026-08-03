import { Router } from "express";
import { authController } from "./auth.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { authValidation } from "./auth.validation";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post("/register", validateRequest(authValidation.registerSchema), authController.registerUser);
router.post("/login", validateRequest(authValidation.loginSchema), authController.loginUser);
router.get("/me", auth(), authController.getMe);
export const authRoutes = router;
