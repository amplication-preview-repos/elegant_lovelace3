import { ModuleModelCreateNestedManyWithoutCoursesInput } from "./ModuleModelCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  title?: string | null;
  description?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  modules?: ModuleModelCreateNestedManyWithoutCoursesInput;
};
