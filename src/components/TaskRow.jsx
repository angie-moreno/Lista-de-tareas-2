import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useForm } from "react-hook-form";
import "../hojas-de-estilo/TaskRow.css";

export default function TaskRow({
  task,
  toggleTask,
  cleanSingleTask,
  editarTarea,
}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    editarTarea({ ...task, name: data.tarea, description: data.descripcion });

    reset();
    setEditMode(false);
  };

  const [editMode, setEditMode] = useState(false);

  return (
    <tr>
      <td className="fila-contenedor">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task);
            task.done = !task.done;
          }}
        />
        {!editMode && (
          <div>
            <p> {task.name}</p>
            <p>{task.description}</p>
          </div>
        )}

        {editMode && (
          <form className="editar-contenedor" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>
                <input
                  className="tarea-contenedor "
                  type="text"
                  placeholder="Editar tarea"
                  defaultValue={task.name}
                  {...register("tarea", {
                    required: { value: true, message: " tarea es requerida" },
                    minLength: {
                      value: 3,
                      message: "La tarea debe tener más de 3 letras",
                    },
                  })}
                />
              </label>
              <span className="error" role="alert">
                {errors.tarea && errors.tarea.message}
              </span>
            </div>
            <div>
              <textarea
                rows="3"
                cols="50"
                placeholder="Describe tu tarea"
                defaultValue={task.description}
                {...register("descripcion")}
              ></textarea>
            </div>
            <button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
              Guardar tarea
            </button>
          </form>
        )}

        <button
          className="deletebutton"
          onClick={() => cleanSingleTask(task.name)}
        >
          <AiFillDelete />
        </button>
        <button className="editbutton" onClick={() => setEditMode(true)}>
          <AiFillEdit />
        </button>
      </td>
    </tr>
  );
}
