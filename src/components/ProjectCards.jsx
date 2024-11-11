import React, { useState } from "react";

const ProjectCards = ({ projects }) => {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card p-4 border rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="mb-2 w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <div className="flex space-x-2 mt-2 flex-wrap">
              {project.languages.map((lang) => (
                <span key={lang} className="badge bg-blue-200 text-blue-800 px-2 py-1 rounded-full mt-2"
>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {modalProject && (
        <div className="modal fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-4">
            <h3 className="text-lg font-semibold mb-4">{modalProject.title}</h3>
            <p className="mb-4">{modalProject.description}</p>
            <div className="space-x-4">
              {modalProject.onlineLink ? (
                <a
                  href={modalProject.onlineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Online
                </a>
              ) : null}
              <a
                href={modalProject.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                {modalProject.onlineLink ? "Repository" : "View Repository"}
              </a>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 text-gray-700 hover:text-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
