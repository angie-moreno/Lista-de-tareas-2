import React from "react";
import { useMyHook } from "../App";

export default function TaskRow({ task, toggleTask, cleanTasks }) {
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
        <button className="deletebutton" onClick={cleanTasks}>
          X
        </button>
      </td>
    </tr>
  );
}
