import React from "react";
import { useForm } from "react-hook-form";
import "../hojas-de-estilo/Task.css";

export default function Task({ createNewTask }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    createNewTask(data.tarea, data.descripcion);

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input
              className="tarea-contenedor "
              type="text"
              placeholder="Nueva tarea"
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
            rows="10"
            cols="50"
            placeholder="Describe tu tarea"
            {...register("descripcion")}
          ></textarea>
        </div>
        <button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Guardar tarea
        </button>
      </form>
    </div>
  );
}
