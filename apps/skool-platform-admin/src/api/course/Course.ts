import { ModuleModel } from "../moduleModel/ModuleModel";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  endDate: Date | null;
  startDate: Date | null;
  modules?: Array<ModuleModel>;
};
