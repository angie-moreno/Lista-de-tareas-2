import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export default function TaskRow({
  task,
  toggleTask,
  cleanSingleTask,
  editarTarea,
}) {
  const [editMode, setEditMode] = useState(false);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task);
            task.done = !task.done;
          }}
        />
        {task.name}
        {task.description}

        {editMode && <input onChange={() => editarTarea(task)} />}

        <button
          className="deletebutton"
          onClick={() => cleanSingleTask(task.name)}
        >
          <AiFillDelete />
        </button>
        <button className="editbutton" onClick={() => setEditMode(true)}>
          <AiFillEdit />
        </button>
        {editMode && (
          <input
            type="submit"
            value="Guardar"
            onClick={() => editarTarea(task)}
          />
        )}
      </td>
    </tr>
  );
}
