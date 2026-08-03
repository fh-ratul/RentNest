import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import { userController } from "./user.controller";

const router= Router()
router.patch("/updateMe", auth(), validateRequest(userValidation.updateProfileSchema), userController.updateProfile);
export const userRoutes = router;

