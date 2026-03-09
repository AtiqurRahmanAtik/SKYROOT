import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { MapPin, Filter } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { projects } from '../constants';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // --- NEW: Location Filter State ---
  const [locationFilter, setLocationFilter] = useState('All');

  // --- NEW: Automatically get unique locations from your data ---
  const uniqueLocations = ['All', ...new Set(projects.map(p => p.location))];

  // --- Pagination States ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  // Reset to page 1 whenever either filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, locationFilter]); 

  // 1. Filter the projects by BOTH Status and Location
  const filteredProjects = projects.filter(p => {
    const matchesStatus = filter === 'All' || p.status === filter;
    const matchesLocation = locationFilter === 'All' || p.location === locationFilter;
    return matchesStatus && matchesLocation;
  });

  // 2. Calculate Pagination variables
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 3. Helper to generate page numbers with '...'
  const generatePageNumbers = (current: number, total: number) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, '...', total];
    if (current >= total - 2) return [1, '...', total - 3, total - 2, total - 1, total];
    return [1, '...', current - 1, current, current + 1, '...', total];
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Our Portfolio" description="Discover Skyroot's commitment to architectural excellence and sustainable urban development through our diverse range of world-class residential and commercial projects." />
      
      {/* Page Header */}
      <section className="bg-neutral py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Our Portfolio</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Discover Skyroot's commitment to architectural excellence and sustainable urban development through our diverse range of world-class residential and commercial projects.
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 border-b border-base-content/5 pb-8">
          
          {/* Status Filters */}
          <div className="flex flex-wrap gap-3">
            {['All', 'Upcoming', 'Ongoing', 'Completed', 'Consultancy'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                  filter === f
                    ? "bg-primary text-white shadow-lg shadow-secondary/20"
                    : "bg-base-content/5 text-base-content/60 hover:bg-base-content/10"
                )}
              >
                {f === 'All' ? 'All Projects' : f}
              </button>
            ))}
          </div>

          {/* Location Dropdown Filter - Hide this when on Consultancy tab */}
          {filter !== 'Consultancy' && (
            <div className="flex items-center gap-3 w-full xl:w-auto bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
              <Filter className="text-primary w-5 h-5 shrink-0" />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="bg-transparent border-none text-neutral font-bold text-sm focus:outline-none focus:ring-0 w-full xl:w-64 cursor-pointer truncate"
              >
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc} className="font-semibold">
                    {loc === 'All' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>
          )}

        </div>

        {/* --- DYNAMIC RENDER: SHOW CONSULTANCY CONTENT OR PROJECT GRID --- */}
        {filter === 'Consultancy' ? (
          
          // CONSULTANCY VIEW
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16 min-h-[600px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Side: Text Content */}
              <div className="space-y-10">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                  We prioritize creating long-lasting relationships with our clients, built on <span className="font-bold text-primary">transparency, integrity, and mutual respect</span>.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-black text-neutral mb-4 border-b-2 border-primary inline-block pb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our mission is to consistently deliver excellence in all our architectural endeavors while ensuring total transparency with our clients, making their dreams a reality built on a foundation of trust.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-black text-neutral mb-4 border-b-2 border-primary inline-block pb-2">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be the leading real estate and consultancy firm recognized for redefining skylines and lifestyles through innovative design, unmatched quality, and a commitment to sustainable growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Image and Contact CTA */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" 
                  alt="Architectural Consultancy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-10">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">Need Expert Advice?</h3>
                  <p className="text-white/80 mb-8 font-medium leading-relaxed max-w-sm">
                    Our architectural and real estate consultants are ready to help you plan, design, and execute your next big project.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-colors duration-300 w-fit shadow-lg shadow-primary/30"
                  >
                    Contact Our Consultants
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        ) : (

          // REGULAR PROJECT GRID VIEW
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 min-h-[600px]">
              {paginatedProjects.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400 font-bold uppercase tracking-widest text-center gap-4">
                  <MapPin className="w-12 h-12 text-gray-200 mb-2" />
                  <p>No projects found matching these filters.</p>
                  <button 
                    onClick={() => { setFilter('All'); setLocationFilter('All'); }}
                    className="text-primary hover:underline text-xs mt-2"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                paginatedProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative aspect-[3/4] overflow-hidden bg-neutral cursor-pointer rounded-xl"
                  >
                    {/* Background Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                    {/* Status Badge */}
                    <div className="absolute top-6 left-6">
                      <span className={cn(
                        "bg-[#1a1a1a] text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-md",
                        project.status === 'Completed' ? "bg-neutral" :
                          project.status === 'Upcoming' ? "bg-neutral" :
                            project.status === 'Consultancy' ? "bg-secondary" : "bg-primary"
                      )}>
                        {project.status === 'Completed' ? 'HANDED OVER' :
                          project.status === 'Upcoming' ? 'SOLD OUT' :
                            project.status}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-black text-white uppercase leading-tight mb-3">
                        {project.title}
                      </h3>
                      <div className="flex items-start gap-2 mb-8">
                        <MapPin className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                        <p className="text-white/80 text-xs font-bold uppercase tracking-wider leading-relaxed">
                          {project.location}
                        </p>
                      </div>

                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center justify-center w-full border border-white/30 bg-primary/90 px-8 py-3.5 text-xs font-bold text-white uppercase tracking-[0.2em] hover:bg-white hover:text-neutral hover:border-white transition-all duration-300 rounded-md backdrop-blur-sm"
                      >
                        Explore Project
                      </Link>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* --- Pagination Controls --- */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 mb-16">
                <div className="join shadow-sm rounded-xl overflow-hidden">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className="join-item btn bg-white border-gray-200 text-neutral hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    «
                  </button>

                  {pageNumbers.map((num, idx) => (
                    <button
                      key={idx}
                      disabled={num === '...'}
                      onClick={() => num !== '...' && setCurrentPage(num as number)}
                      className={`join-item btn border-gray-200 ${
                        num === '...' ? 'bg-white disabled:bg-white disabled:text-gray-400 cursor-default' :
                        num === currentPage ? 'bg-primary text-white border-primary hover:bg-primary/90' : 'bg-white text-neutral hover:bg-gray-50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className="join-item btn bg-white border-gray-200 text-neutral hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    »
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="bg-base-100 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl shadow-neutral/5">
          <div className="p-12 md:p-20 space-y-8 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">Ongoing Flagship</div>
              <h2 className="text-4xl lg:text-5xl font-black text-neutral leading-tight">Skyroot Horizon</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Experience the pinnacle of luxury living in our most ambitious project yet. Skyroot Horizon brings ultra-luxury apartments with panoramic views of the Gulshan Lake and smart home integration.
            </p>
            <div className="flex flex-wrap gap-8 py-4 border-y border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Location</div>
                  <span className="font-bold text-neutral">Gulshan 2, Dhaka</span>
                </div>
              </div>
            </div>
            <Link
              to="/project/fp1"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-primary/30 w-fit"
            >
              Explore Exclusive Access
            </Link>
          </div>
          <div className="h-full min-h-[400px] lg:min-h-[600px] relative">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
              alt="Skyroot Horizon"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};