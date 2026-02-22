import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: "Project Alpha", desc: "A comprehensive web application for enterprise management." },
    { id: 2, title: "Project Beta", desc: "Mobile-first e-commerce platform with seamless payment integration." },
    { id: 3, title: "Project Gamma", desc: "Custom CRM solution built for the real estate industry." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-600 mb-3">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;