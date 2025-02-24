"use server"

import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../types/user";

const userSchema = new Schema<IUser>({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    gender: { type: String, required: false }
})

const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;