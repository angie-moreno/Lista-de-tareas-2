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
        </div>
        <div className="description">
          <label>
            Descripción de la Tarea
            <input className="inputdescription" type="text"></input>
          </label>
        </div>
        <button>Guardar tarea</button>
      </form>
    </div>
  );
}
