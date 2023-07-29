import "./TaskCard.css";
import React from "react";

interface propTitle {
  status: string;
  title: string;
  dueDate: string;
  assigneeName: string;
}

let TaskCard: React.FC<propTitle> = ({
  status,
  dueDate,
  title,
  assigneeName,
}) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>
        {status}: {dueDate}
      </p>
      <p>Assignee Name: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
