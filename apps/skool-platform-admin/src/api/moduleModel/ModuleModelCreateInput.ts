import { LessonCreateNestedManyWithoutModuleModelsInput } from "./LessonCreateNestedManyWithoutModuleModelsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ModuleModelCreateInput = {
  description?: string | null;
  title?: string | null;
  lessons?: LessonCreateNestedManyWithoutModuleModelsInput;
  course?: CourseWhereUniqueInput | null;
};
