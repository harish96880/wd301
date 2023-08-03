import React from "react";
import Task from "./Task";
import { taskItem } from "./types";

interface Props {
  tasks: taskItem[];
}

interface State {}
const TaskList = (props:Props) => {
  const list = props.tasks.map((task, id) => (
    <Task key={id} title={task.title} date={task.date} desc={task.desc} />
  ));
    return <>{list}</>

}

export default TaskList;
