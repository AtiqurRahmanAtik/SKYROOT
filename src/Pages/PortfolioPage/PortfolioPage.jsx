import { useState } from "react";
import { projectsData } from "../../../public/Data";
import ProjectCard from "../../Components/Projects/ProjectCard";
import FeaturedDevelopment from "../../Components/Projects/FeaturedDevelopment";
import Pagination from "../../Components/Projects/Pagination";
import Footer from "../../Components/Projects/Footer";



export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const tabs = ['All Projects', 'Upcoming', 'Ongoing', 'Completed'];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Portfolio</h1>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Discover Skyroot's commitment to architectural excellence and sustainable urban development through our diverse range of world-class residential and commercial projects.
            </p>
          </div>
          <button className="mt-6 md:mt-0 border border-gray-300 hover:bg-gray-50 font-semibold text-sm px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors">
            <Download size={16} /> Download Brochure
          </button>
        </div>

        {/* Filters & Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 mb-8 pb-2">
          <div className="flex gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold text-sm whitespace-nowrap pb-2 border-b-2 transition-colors -mb-[10px] ${
                  activeTab === tab 
                    ? 'border-[#7c3aed] text-[#7c3aed]' 
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-gray-900">
            <ListFilter size={16} /> Sort by: Newest
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Featured Section */}
        <FeaturedDevelopment />

        {/* Pagination */}
        <Pagination />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}