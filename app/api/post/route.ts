import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import { getAllPostsFromDB, createNewPostInDB } from "@/app/api/post/postHelper";

// GET route to retrieve all posts
export async function GET() {
  try {
    await dbConnect();
    const posts = await getAllPostsFromDB();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse("Error", { status: 500 });
  }
}

// POST route to create a new post
export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const { name } = await req.json();
    
    if (!name) {
      return new NextResponse("Missing 'name' field", { status: 400 });
    }

    const newPost = await createNewPostInDB({ name });

    return new NextResponse(`Post Created: ${newPost.name}`, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return new NextResponse("Error creating post", { status: 500 });
  }
}