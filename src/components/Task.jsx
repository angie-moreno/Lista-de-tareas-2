import React from "react";
import { useState } from "react";
import { useMyHook } from "../App";

export default function () {
  const { createNewTask } = useMyHook();

  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);

    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Guardar tarea</button>
      </div>
    </form>
  );
}
