import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  date: string
  desc:string
}

const Task = (props:TaskProp) => {

    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h3 className="font-bold text-2xl text-white">{props.title} <span className=" text-sm bg-blue-700 rounded-xl p-2">({props.date})</span></h3>
        <p className="text-lg text-gray-200">{props.desc}</p>
        <button className="text-sm bg-red-500 p-1 text-white my-2 rounded-xl">Delete</button>
      </div>
    );
}

export default Task;
