import { ModuleModelWhereUniqueInput } from "../moduleModel/ModuleModelWhereUniqueInput";

export type LessonUpdateInput = {
  title?: string | null;
  content?: string | null;
  moduleModel?: ModuleModelWhereUniqueInput | null;
};
