import "./App.css";
import Task from "./components/Task";
import TaskTable from "./components/TaskTable";
import { useMyHook } from "./hooks/useMyHook";

function App() {
  const {
    taskItems,
    descItems,
    createNewTask,
    toggleTask,
    cleanTasks,
    cleanSingleTask,
    editarTarea,
  } = useMyHook();

  return (
    <div className="App">
      <h2>Mis tareas</h2>
      <Task createNewTask={createNewTask} />

      <TaskTable
        tasks={taskItems}
        descriptions={descItems}
        toggleTask={toggleTask}
        cleanTasks={cleanTasks}
        cleanSingleTask={cleanSingleTask}
        editarTarea={editarTarea}
      />
    </div>
  );
}

export default App;
