import React from 'react';
import { MapPin } from 'lucide-react';
import Badge from './Badge'; // Adjust import path if needed

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full bg-gray-100">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3">
          <Badge status={project.status} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
        <div className="flex items-center text-gray-500 mt-1 text-sm">
          <MapPin size={14} className="mr-1" />
          {project.location}
        </div>
        <div className="flex justify-between items-end mt-6">
          <div>
            <p className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">{project.priceLabel}</p>
            <p className="font-bold text-lg text-purple-900">{project.priceValue}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;