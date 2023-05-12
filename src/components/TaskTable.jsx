import React from "react";
import TaskRow from "./TaskRow";

export default function TaskTable({
  tasks,
  toggleTask,
  cleanTasks,
  cleanSingleTask,
  editarTarea,
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
            key={task.id}
            toggleTask={toggleTask}
            cleanTasks={cleanTasks}
            cleanSingleTask={cleanSingleTask}
            editarTarea={editarTarea}
          />
        ))}
      </tbody>
    </table>
  );
}
