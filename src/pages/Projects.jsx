import React, { useState } from "react";
import ProjectCards from "../components/ProjectCards";
import { projectData } from "../assets/textContents/projects";

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const languages = ["All", ...new Set(projectData.flatMap((project) => project.languages))];

  const filteredProjects = selectedLanguage === "All"
    ? projectData
    : projectData.filter((project) => project.languages.includes(selectedLanguage));

  return (
    <div className="projects-page p-4">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>

      <div className="flex space-x-2 overflow-x-auto mb-6">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => setSelectedLanguage(language)}
            className={`px-4 py-2 rounded whitespace-nowrap ${
              selectedLanguage === language ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-blue-400"
            }`}
          >
            {language}
          </button>
        ))}
      </div>

      <ProjectCards projects={filteredProjects} />
    </div>
  );
};

export default Projects;
