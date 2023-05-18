import React from "react";
import TaskRow from "./TaskRow";
import { Heading } from "@chakra-ui/react";

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
          <th>
            <Heading
              as="h2"
              size="xl"
              color="RGBA(0, 0, 0, 0.92)"
              mt="30px"
              mb="30px"
            >
              Tareas
            </Heading>
          </th>
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
