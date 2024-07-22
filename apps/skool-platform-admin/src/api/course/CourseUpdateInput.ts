import { ModuleModelUpdateManyWithoutCoursesInput } from "./ModuleModelUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  title?: string | null;
  description?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  modules?: ModuleModelUpdateManyWithoutCoursesInput;
};
