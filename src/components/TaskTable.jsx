import React from "react";
import TaskRow from "./TaskRow";

export default function TaskTable({
  tasks,
  toggleTask,
  cleanTasks,
  cleanSingleTask,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow
            task={task}
            key={task.name}
            toggleTask={toggleTask}
            cleanTasks={cleanTasks}
            cleanSingleTask={cleanSingleTask}
          />
        ))}
      </tbody>
    </table>
  );
}
