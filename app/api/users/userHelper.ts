import UserModel from "@/app/models/UserModel";
import { IUser } from "@/app/types/user";

export async function getAllUsersFromDB() {
    try {
        const posts = await UserModel.find({});
        return posts;
    } catch (error) {
        console.error("Error fetching users from database:", error);
        throw new Error("Error fetching users");
    }
}

export async function createNewUserInDB(userData: IUser) {
    try {
        const newPost = await UserModel.create(userData);
        return newPost;
    } catch (error) {
        console.error("Error creating user in database:", error);
        throw new Error("Error creating user");
    }
}