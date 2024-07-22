import { Community } from "../community/Community";
import { User } from "../user/User";
import { Comment } from "../comment/Comment";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  community?: Community | null;
  user?: User | null;
  comments?: Array<Comment>;
};
