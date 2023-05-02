import "./App.css";
import Task from "./components/Task";
import TaskTable from "./components/TaskTable";
import { useMyHook } from "./hooks/useMyHook";

function App() {
  const { taskItems, createNewTask, toggleTask, cleanTasks, cleanSingleTask } =
    useMyHook();

  return (
    <div className="App">
      <Task createNewTask={createNewTask} />

      <TaskTable
        tasks={taskItems}
        toggleTask={toggleTask}
        cleanTasks={cleanTasks}
        cleanSingleTask={cleanSingleTask}
      />
    </div>
  );
}

export default App;
