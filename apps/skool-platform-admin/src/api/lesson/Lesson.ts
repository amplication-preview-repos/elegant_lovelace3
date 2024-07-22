import { ModuleModel } from "../moduleModel/ModuleModel";

export type Lesson = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  moduleModel?: ModuleModel | null;
};
