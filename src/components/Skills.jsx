import React, { useState } from 'react';
import initialSkills from "../assets/textContents/skills"

const Skills = () => {
  const [sortType, setSortType] = useState("name");

  const sortedSkills = [...initialSkills].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "level") {
      return b.proficiency - a.proficiency;
    }
    return 0;
  });

  const getTickClass = (tick, proficiency) => {
    return tick <= proficiency ? "bg-red-500" : "bg-gray-300";
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-black">My Skills</h2>
        
        <div className="space-x-2">
          <button
            onClick={() => setSortType("name")}
            className={`px-4 py-2 rounded ${sortType === "name" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortType("level")}
            className={`px-4 py-2 rounded ${sortType === "level" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Sort by Level
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {sortedSkills.map((skill, index) => (
          <div key={index} className="skill-item text-center p-4 border border-gray-200 rounded-lg shadow-md">
            <img src={skill.icon} alt={skill.name} className="skill-logo mx-auto mb-2" />
            <p>{skill.name}</p>
            
            <div className="flex justify-between mt-2">
              {[1, 2, 3, 4].map((tick) => (
                <div
                  key={tick}
                  className={`h-2 w-2 rounded-full ${getTickClass(tick, skill.proficiency)}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;