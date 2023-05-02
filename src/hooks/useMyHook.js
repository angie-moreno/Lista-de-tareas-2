import { useState, useEffect } from "react";
export const useMyHook = () => {
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
  };
};
