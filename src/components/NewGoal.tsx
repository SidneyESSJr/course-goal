import { FormEvent } from "react";
import type { Goal } from "../types";

const NewGoal = ({ onAddGoal }: { onAddGoal: (goal: Goal) => void }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const goal = handleFormData(formData);
    onAddGoal(goal);
    event.currentTarget.reset();
  }

  function handleFormData(formData: FormData): Goal {
    return {
      id: Math.random(),
      title: formData.get("goal")!.toString(),
      description: formData.get("summary")!.toString(),
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal"> Your goal</label>
        <input type="text" id="goal" name="goal" required />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
