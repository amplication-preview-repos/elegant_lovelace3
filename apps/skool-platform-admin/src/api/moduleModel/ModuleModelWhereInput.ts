import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ModuleModelWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  lessons?: LessonListRelationFilter;
  course?: CourseWhereUniqueInput;
};
