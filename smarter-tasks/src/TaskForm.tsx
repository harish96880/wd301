import React from "react";
import { taskItem } from "./types";

interface TaskFormState {
  title: string;
  date: string;
  desc: string
}

interface TaskFormProps {
  addTask: (task: taskItem) => void;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      date: "",
      desc: ""
    };

  }
  addTask: React.FormEventHandler<HTMLButtonElement> = (event) => {
    if(this.state.title == "" || this.state.date == "" || this.state.desc == "") window.alert("All fields are mandatory")
    else {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      date: this.state.date,
      desc: this.state.desc
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  }
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };
  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ date: event.target.value });
  };
  descChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ desc: event.target.value });
  };
  render() {
    return (
      <form>
        <input
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-70"
          placeholder="Enter the title"
          value={this.state.title}
          onChange={this.titleChanged}
          id="todoTitle"
          required
        />
        <input id="todoDueDate" type="date" placeholder="date" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-70" value={this.state.date} onChange={this.dateChanged} required/>
        <input type="text" id="todoDescription" placeholder="description of task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-70" value={this.state.desc} onChange={this.descChanged} required/>
        <br></br>
        <button
          className="bg-purple-500 rounded-lg text-white font-bold text-sm p-3 mx-2"
          type="submit"
          onClick={this.addTask}
          id="addTaskButton"
        >
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
