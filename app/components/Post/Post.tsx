"use client";

import { createPostOnAPI, getPostsFromAPI } from "@/app/services/post";
import { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPostName, setNewPostName] = useState("New Post");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postsData = await getPostsFromAPI();
        setPosts(postsData);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, []);


  const handleCreatePost = async () => {
    try {
      await createPostOnAPI({ name: newPostName });
      
      const updatedPosts = await getPostsFromAPI();
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <input
          type="text"
          value={newPostName}
          onChange={(e) => setNewPostName(e.target.value)}
          placeholder="Enter post name"
        />
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;