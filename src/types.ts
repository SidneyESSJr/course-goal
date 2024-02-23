import { PropsWithChildren } from "react";

export interface Goal {
  id: number;
  title: string;
  description: string;
}

export interface InfoBoxData extends PropsWithChildren {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
}

export interface CourseGoalListData {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
}

export interface CourseGoalData {
  goal: Goal;
  onDelete: (id: number) => void;
}
