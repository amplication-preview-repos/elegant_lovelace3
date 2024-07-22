import { Lesson } from "../lesson/Lesson";
import { Course } from "../course/Course";

export type ModuleModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  title: string | null;
  lessons?: Array<Lesson>;
  course?: Course | null;
};
