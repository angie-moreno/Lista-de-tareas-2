import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const useMyHook = () => {
  let data = JSON.parse(localStorage.getItem("tasks"));
  const [taskItems, setTaskItems] = useState(data ? data : []);

  const auxiliarTareas = taskItems;

  const editarTarea = (task) => {
    const indice = taskItems.indexOf(task);
    taskItems.splice(indice, 0, auxiliarTareas);

    setTaskItems(auxiliarTareas);
  };

  const createNewTask = (taskName, taskDescription) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([
        ...taskItems,
        {
          id: uuidv4(),
          name: taskName,
          done: false,
          description: taskDescription,
        },
      ]);
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
  const cleanSingleTask = (taskname) => {
    setTaskItems(taskItems.filter((task) => task.name != taskname));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return {
    taskItems,
    createNewTask,
    toggleTask,
    cleanTasks,
    cleanSingleTask,
    editarTarea,
  };
};
