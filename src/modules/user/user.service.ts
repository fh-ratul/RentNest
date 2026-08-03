import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import { IUpdateProfile, IChangePassword } from "./user.interface";


const updateProfile = async (userId: string, payload: IUpdateProfile) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: payload,
    select: { id: true, name: true, email: true, role: true },
  });
  return user;
};

export const userService = {
    updateProfile, 
     };
