import { ModuleModelWhereUniqueInput } from "../moduleModel/ModuleModelWhereUniqueInput";

export type LessonCreateInput = {
  title?: string | null;
  content?: string | null;
  moduleModel?: ModuleModelWhereUniqueInput | null;
};
