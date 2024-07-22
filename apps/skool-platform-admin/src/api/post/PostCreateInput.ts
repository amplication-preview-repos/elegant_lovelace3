import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  content?: string | null;
  community?: CommunityWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
};
