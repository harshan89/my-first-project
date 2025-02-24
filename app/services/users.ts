import axios from "axios";
import { IUser } from "../types/user";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function getUsersFromAPI() {
    try {
        const response = await axiosInstance.get("/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching posts from API:", error);
        throw error;
    }
}

export async function createUserOnAPI(postData: IUser) {
    try {
        const response = await axiosInstance.post("/users", postData);
        return response.data;
    } catch (error) {
        console.error("Error creating post on API:", error);
        throw error;
    }
}