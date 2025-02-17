"use server"

import mongoose, { Schema, Document, Model } from "mongoose";

interface IPost extends Document {
    name: string;
    type?: string
}

const postSchema = new Schema<IPost>({
    name: { type: String, required: true },
    type: { type: String, required: false }
})

const PostModel: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);

export default PostModel;