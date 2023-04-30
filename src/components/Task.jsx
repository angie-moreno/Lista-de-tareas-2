import React from "react";
import { useState } from "react";

export default function Task({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);

    setNewTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              placeholder="Nueva tarea"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
          </label>
          <button>Guardar tarea</button>
        </div>
      </form>
    </div>
  );
}
