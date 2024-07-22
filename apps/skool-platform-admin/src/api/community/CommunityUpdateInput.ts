import { PostUpdateManyWithoutCommunitiesInput } from "./PostUpdateManyWithoutCommunitiesInput";

export type CommunityUpdateInput = {
  name?: string | null;
  posts?: PostUpdateManyWithoutCommunitiesInput;
};
