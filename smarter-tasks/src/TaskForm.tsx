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

const TaskForm = (props : TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    date: "",
    desc: "",
  });
  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, desc: event.target.value });
  };
  const dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, date: event.target.value });
  };
  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.date.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", desc: "", date: "" });
  };
  return (
    <form onSubmit={addTask}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoTitle"
            name="todoTitle"
            type="text"
            value={formState.title}
            onChange={titleChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="todoTitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Todo Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDescription"
            name="todoDescription"
            type="text"
            value={formState.desc}
            onChange={descChanged}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="todoDescription"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDueDate"
            name="todoDueDate"
            type="date"
            value={formState.date}
            onChange={dateChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="todoDueDate"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Due Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add item
          </button>
        </div>
      </div>
    </form>
  );
}

// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       date: "",
//       desc: ""
//     };

//   }
//   addTask: React.FormEventHandler<HTMLButtonElement> = (event) => {
//     if(this.state.title == "" || this.state.date == "" || this.state.desc == "") window.alert("All fields are mandatory")
//     else {
//     event.preventDefault();
//     const newTask = {
//       title: this.state.title,
//       date: this.state.date,
//       desc: this.state.desc
//     };
//     this.props.addTask(newTask);
//     this.setState({ title: "" });
//   }
//   };
//   titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     this.setState({ title: event.target.value });
//   };
//   dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     this.setState({ date: event.target.value });
//   };
//   descChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     this.setState({ desc: event.target.value });
//   };
//   render() {
//     return (
//       <form>
//         <input
//           className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-70"
//           placeholder="Enter the title"
//           value={this.state.title}
//           onChange={this.titleChanged}
//           id="todoTitle"
//           required
//         />
//         <input id="todoDueDate" type="date" placeholder="date" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-70" value={this.state.date} onChange={this.dateChanged} required/>
//         <input type="text" id="todoDescription" placeholder="description of task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-70" value={this.state.desc} onChange={this.descChanged} required/>
//         <br></br>
//         <button
//           className="bg-purple-500 rounded-lg text-white font-bold text-sm p-3 mx-2"
//           type="submit"
//           onClick={this.addTask}
//           id="addTaskButton"
//         >
//           Add item
//         </button>
//       </form>
//     );
//   }
// }

export default TaskForm;
