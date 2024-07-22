import { PostCreateNestedManyWithoutCommunitiesInput } from "./PostCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  name?: string | null;
  posts?: PostCreateNestedManyWithoutCommunitiesInput;
};
