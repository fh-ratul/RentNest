import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userService } from "./user.service";


const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.updateProfile(req.user!.id, req.body);
  sendResponse(res, { success: true, statusCode: httpStatus.OK, message: "Profile updated", data: result });
});

export const userController = { 
    updateProfile,

};
