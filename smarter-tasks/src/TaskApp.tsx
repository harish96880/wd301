import React from "react";
import { taskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import './TaskCard.css'

interface TaskAppProp {}
interface TaskAppState {
  tasks: taskItem[];
}

class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  addTask = (task: taskItem) => {
    this.setState((state) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  render() {
    return (
      <div className="py-10 max-w-4xl mx-auto">
        <h1 className="text-5xl mb-2 font-bold text-white">
          Smarter Tasks📝
        </h1>
        <h1 className="text-lg mb-6 text-white">
          <span className="font-bold text-lg text-white">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className=" grid grid-cols-2 gap-4 my-5">
          <div className="card border border-slate-200 rounded-xl p-4">
            <h1 className="text-white text-3xl font-bold text-center mb-2">
              Add Task
            </h1>
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;
