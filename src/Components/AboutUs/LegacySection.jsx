import React from 'react';

const LegacySection = () => {
  const stats = [
    { value: "50+", label: "PROJECTS" },
    { value: "15+", label: "AWARDS" },
    { value: "1.2k", label: "CLIENTS" },
    { value: "25+", label: "RATINGS" },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
          A Legacy Built on <br /> Trust and Innovation
        </h2>
        <p className="text-slate-500 mb-6 leading-relaxed">
          Skyroot Real Estate stands as a beacon of excellence in the corporate real estate sector. With over 20 years of dedicated service, we have transformed urban landscapes and built lasting relationships with our valued clients.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
              <p className="text-2xl font-black text-[#7D12FF]">{stat.value}</p>
              <p className="text-[10px] font-bold text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative px-8">
        <div className="absolute top-6 bottom-6 right-0 left-12 bg-[#7D12FF] rounded-3xl opacity-20 z-0"></div>
        <img 
          src="https://images.unsplash.com/photo-1545324418-f1d3ac1ef3c9?auto=format&fit=crop&q=80" 
          alt="Modern Architecture" 
          className="relative z-10 w-full rounded-3xl shadow-xl border-4 border-white object-cover h-[500px]" 
        />
      </div>
    </section>
  );
};

export default LegacySection;