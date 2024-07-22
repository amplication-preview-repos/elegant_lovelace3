import { JsonValue } from "type-fest";
import { Post } from "../post/Post";
import { Notification } from "../notification/Notification";
import { Comment } from "../comment/Comment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  posts?: Array<Post>;
  notifications?: Array<Notification>;
  comments?: Array<Comment>;
};
