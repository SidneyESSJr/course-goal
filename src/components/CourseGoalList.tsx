import { ReactNode } from "react";
import type { CourseGoalListData } from "../types";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListData) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 3) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal goal={goal} onDelete={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
