import React from "react";
import Task from "./Task";
import { taskItem } from "./types";

interface Props {
  tasks: taskItem[];
}

interface State {}
class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, id) => (
      <Task key={id} title={task.title} date={task.date} desc={task.desc} />
    ));
  }
}

export default TaskList;
