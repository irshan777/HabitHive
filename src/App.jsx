import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";

export default function App() {
  return(
    <div>
      <h1>HabitHive</h1>
      <p>Our friendly TaskManager </p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  )
}

