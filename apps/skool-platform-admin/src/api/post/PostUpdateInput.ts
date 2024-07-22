import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  content?: string | null;
  community?: CommunityWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
};
