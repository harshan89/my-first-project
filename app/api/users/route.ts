import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/db";
import { IUser } from "@/app/types/user";
import { createNewUserInDB, getAllUsersFromDB } from "./userHelper";

export async function GET() {
    try {
        await dbConnect();
        const posts = await getAllUsersFromDB();
        return NextResponse.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse("Error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();

        const user: IUser = await req.json();

        if (!user) { // validate required fields
            //   return new NextResponse("Missing 'name' field", { status: 400 });
        }

        const newUser = await createNewUserInDB(user);

        return new NextResponse(`Post Created: ${newUser.fullName}`, { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return new NextResponse("Error creating post", { status: 500 });
    }
}