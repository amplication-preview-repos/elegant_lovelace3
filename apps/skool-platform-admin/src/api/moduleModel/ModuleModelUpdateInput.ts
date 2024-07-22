import { LessonUpdateManyWithoutModuleModelsInput } from "./LessonUpdateManyWithoutModuleModelsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ModuleModelUpdateInput = {
  description?: string | null;
  title?: string | null;
  lessons?: LessonUpdateManyWithoutModuleModelsInput;
  course?: CourseWhereUniqueInput | null;
};
