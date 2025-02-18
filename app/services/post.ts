import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function getPostsFromAPI() {
    try {
        const response = await axiosInstance.get("/post");
        return response.data;
    } catch (error) {
        console.error("Error fetching posts from API:", error);
        throw error;
    }
}

export async function createPostOnAPI(postData: { name: string; type?: string }) {
    try {
        const response = await axiosInstance.post("/post", postData);
        return response.data;
    } catch (error) {
        console.error("Error creating post on API:", error);
        throw error;
    }
}