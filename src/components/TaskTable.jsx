import React from "react";
import TaskRow from "./TaskRow";
import { useMyHook } from "../App";

export default function TaskTable({ tasks }) {
  const { toggleTask, cleanTasks } = useMyHook();
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
          />
        ))}
      </tbody>
    </table>
  );
}
