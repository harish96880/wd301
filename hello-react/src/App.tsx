import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="m-5">
      <h1 className="text-4xl font-bold my-3">Smarter Tasks</h1>
      <p className="my-2">
        Project:
        <span className="text-gray-500">
          Graduation Final Year Project(Revamp College Website)
        </span>
      </p>
      <div className="card flex flex-row">
        <div>
          <h1 className="text-2xl font-bold my-3">Pending</h1>
          <TaskCard
            title="Build a website"
            dueDate="10th April 2023"
            assigneeName="Sriharish"
          />
          <TaskCard
            title="Deploy the website"
            dueDate="10th October 2023"
            assigneeName="Sedhushree"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            New Task
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-3">Done</h1>
          <TaskCard
            title="Getting Permission from principal"
            completedAtDate="4th April 2023"
            assigneeName="Sriharish"
          />
          <TaskCard
            title="Build the mockup"
            completedAtDate="12th March 2023"
            assigneeName="Sedhushree"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
