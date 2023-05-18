import "../App.css";
import Task from "../components/Task";
import TaskTable from "../components/TaskTable";
import { useMyHook } from "../hooks/useMyHook";
import { Heading } from "@chakra-ui/react";

function Tareas() {
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
      <Heading as="h2" size="3xl" noOfLines={1} color="RGBA(0, 0, 0, 0.92)">
        Mis tareas
      </Heading>
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
export default Tareas;
