import { CourseGoalData } from "../types";

const CourseGoal = ({ goal, onDelete }: CourseGoalData) => {
  return (
    <article>
      <div>
        <h2>{goal.title}</h2>
        <p>{goal.description}</p>
      </div>
      <button onClick={() => onDelete(goal.id)} type="button">
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
