import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ModuleModelListRelationFilter } from "../moduleModel/ModuleModelListRelationFilter";

export type CourseWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  startDate?: DateTimeNullableFilter;
  modules?: ModuleModelListRelationFilter;
};
