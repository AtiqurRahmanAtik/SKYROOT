import React from 'react';

const ProjectsSection = () => {

    const projects = [
    { title: "Skyroot Azure Heights", location: "Downtown Marina, NY", price: "From $2.5M", type: "RESIDENTIAL", img: "https://images.unsplash.com/photo-1545324418-f1d3ac1ef3c9?auto=format&fit=crop&q=80" },
    { title: "The Nexus Business Hub", location: "Tech District, SF", price: "Leasing Now", type: "COMMERCIAL", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" },
    { title: "Veridian Green Suites", location: "Central Park East, CO", price: "From $1.8M", type: "ECO-LIVING", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" }
  ];




    return (
        <>

        <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Projects</h2>
          <p className="text-slate-500 max-w-md">Explore our diverse portfolio of residential, commercial, and mixed-use developments.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg mt-6 md:mt-0">
          {['Ongoing', 'Upcoming', 'Completed'].map((tab) => (
            <button key={tab} className={`px-6 py-2 rounded-md font-semibold text-sm transition ${tab === 'Ongoing' ? 'bg-[#7D12FF] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((item, i) => (
          <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <span className="absolute top-4 left-4 bg-[#7D12FF] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">
                {item.type}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex items-center gap-1">📍 {item.location}</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-[#7D12FF] font-bold">{item.price}</span>
                <button className="text-slate-900 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">DETAILS →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
            
        </>
    );
};

export default ProjectsSection;