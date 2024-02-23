import { useState } from "react";
import "./App.css";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";
import { Goal } from "./types.ts";

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoals(goal: Goal) {
    setGoals((prevState) => {
      return [...prevState, goal];
    });
  }

  function handleDeleteGoals(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "asd" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoals} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoals} />
    </main>
  );
}

export default App;
