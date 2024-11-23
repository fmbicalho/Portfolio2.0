import React, { useState } from "react";
import initialSkills from "../assets/textContents/skills";

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const filteredSkills = initialSkills
    .filter((skill) =>
      filter === "all" ||
      skill.segment === filter ||
      skill.segment === "fullstack"
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-black">My Skills</h2>
        
        <div className="space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-4 py-2 rounded ${filter === "frontend" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-4 py-2 rounded ${filter === "backend" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Backend
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
            <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
