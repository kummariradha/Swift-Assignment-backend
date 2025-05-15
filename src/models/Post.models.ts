import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostSchema = new Schema<IPost>({
  id: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export const PostModel = mongoose.model<IPost>('Post', PostSchema);
