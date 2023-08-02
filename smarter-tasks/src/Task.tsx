import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  date: string
  desc:string
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h3 className="font-bold text-2xl text-white">{this.props.title} <span className=" text-sm bg-blue-700 rounded-xl p-2">({this.props.date})</span></h3>
        <p className="text-lg text-gray-200">{this.props.desc}</p>
      </div>
    );
  }
}

export default Task;
