import React from "react";

export default function TaskRow({
  task,
  toggleTask,
  cleanTasks,
  cleanSingleTask,
}) {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task);
            task.done = !task.done;
          }}
        />
        <button
          className="deletebutton"
          onClick={() => cleanSingleTask(task.name)}
        >
          X
        </button>
      </td>
    </tr>
  );
}
