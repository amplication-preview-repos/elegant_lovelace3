import { SortOrder } from "../../util/SortOrder";

export type ModuleModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
  courseId?: SortOrder;
};
