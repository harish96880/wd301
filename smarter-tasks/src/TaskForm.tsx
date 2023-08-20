import React, { useState } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

const TaskForm: React.FC<TaskFormProps> = (props: TaskFormProps) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      id: 1,
      title: formState.title,
      description: formState.description,
      dueDate: formState.dueDate,
    };

    if (newTask.title.trim() !== "" && newTask.dueDate.trim() !== "") {
      props.addTask(newTask);
      setFormState({ title: "", description: "", dueDate: "" });
    }
  };

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, title: event.target.value });
  };

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, description: event.target.value });
  };

  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, dueDate: event.target.value });
  };

  return (
    <form onSubmit={addTask}>
      <label htmlFor="todoTitle">Task title : </label>
      <input
        id="todoTitle"
        className="border border-slate-400 my-2 ml-7"
        type="text"
        value={formState.title}
        onChange={titleChanged}
        required
      />
      <br />
      <label htmlFor="todoDescription">Description : </label>
      <input
        id="todoDescription"
        className="border border-slate-400 my-2 ml-2"
        type="text"
        value={formState.description}
        onChange={descriptionChanged}
        required
      />
      <br />
      <label htmlFor="todoDueDate">Due date : </label>
      <input
        id="todoDueDate"
        className="border border-slate-400 my-2 ml-6"
        type="text"
        value={formState.dueDate}
        onChange={dueDateChanged}
        required
      />
      <br />
      <button
        id="addTaskButton"
        className="px-3 py-1 my-3 bg-gray-200 hover:bg-gray-300 rounded"
        type="submit"
      >
        Add item
      </button>
    </form>
  );
};

export default TaskForm;
