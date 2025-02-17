import PostModel from "@/app/models/PostModel";

export async function getAllPostsFromDB() {
    try {
        const posts = await PostModel.find({});
        return posts;
    } catch (error) {
        console.error("Error fetching posts from database:", error);
        throw new Error("Error fetching posts");
    }
}

export async function createNewPostInDB(postData: { name: string; type?: string }) {
    try {
        const newPost = await PostModel.create(postData);
        return newPost;
    } catch (error) {
        console.error("Error creating post in database:", error);
        throw new Error("Error creating post");
    }
}