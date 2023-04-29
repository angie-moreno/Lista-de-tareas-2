import { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskTable from "./components/TaskTable";

export function useMyHook() {
  let data = JSON.parse(localStorage.getItem("tasks"));
  const [taskItems, setTaskItems] = useState(data ? data : []);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return { taskItems, createNewTask, toggleTask, cleanTasks };
}

function App() {
  const { taskItems, createNewTask, toggleTask, cleanTasks } = useMyHook();

  return (
    <div className="App">
      <Task createNewTask={createNewTask} />
      <TaskTable
        tasks={taskItems}
        toggleTask={toggleTask}
        cleanTasks={cleanTasks}
      />
    </div>
  );
}

export default App;
