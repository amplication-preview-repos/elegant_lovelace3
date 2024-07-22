import { Post } from "../post/Post";

export type Community = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  posts?: Array<Post>;
};
