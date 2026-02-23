import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Projects Finished", value: "150+" },
    { label: "Happy Customers", value: "12M" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-[#7D12FF] font-bold text-sm uppercase tracking-widest">About Our Story</span>
        <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">Our Story: Rooted in Trust, Driven by Vision.</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          For over two decades, Skyroot has been at the forefront of innovative real estate developments. We don't just build structures; we build communities and create homes that will last a lifetime.
        </p>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-black text-[#7D12FF]">{stat.value}</p>
              <p className="text-xs text-slate-500 font-bold uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1545324418-f1d3ac1ef3c9?auto=format&fit=crop&q=80" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="" />
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" className="rounded-2xl h-48 w-full object-cover shadow-lg" alt="" />
        </div>
        <div className="pt-12 space-y-4">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" className="rounded-2xl h-48 w-full object-cover shadow-lg" alt="" />
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;