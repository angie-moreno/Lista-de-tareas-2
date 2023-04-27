import React from "react";
import { useMyHook } from "../App";

export default function TaskRow({ task }) {
  const { toggleTask, cleanTasks } = useMyHook();
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
