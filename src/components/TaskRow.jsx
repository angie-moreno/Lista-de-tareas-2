import React from "react";

export default function TaskRow({ task, toggleTask, cleanTasks }) {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
        <button className="deletebutton" onClick={cleanTasks}>
          X
        </button>
      </td>
    </tr>
  );
}
