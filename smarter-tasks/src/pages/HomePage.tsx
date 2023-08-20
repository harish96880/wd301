import React from "react";
import "../index.css";

const HomePage: React.FC = () => {
  return (
    <div className="homePage flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
      <p className="text-lg text-gray-600">
        Welcome to the Task Manager application!
      </p>
    </div>
  );
};

export default HomePage;
