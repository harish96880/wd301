import "./TaskCard.css";
import React from "react";

interface propTitle {
  completedAtDate: string;
  title: string;
  dueDate: string;
  assigneeName: string;
}

let TaskCard: React.FC<propTitle> = ({
  completedAtDate,
  dueDate,
  title,
  assigneeName,
}) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>
        {completedAtDate}: {dueDate}
      </p>
      <p>Assignee Name: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
