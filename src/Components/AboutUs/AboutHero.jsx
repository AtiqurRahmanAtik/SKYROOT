import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mt-10">
        <p className="text-sm font-bold tracking-widest text-slate-300 uppercase mb-4">Home / About Us</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Redefining <span className="text-[#7D12FF]">Urban</span> Living
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Making the future of real estate with trust, integrity, and class level experience. We are open for sustainable growth.
        </p>
        
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Making the future of real estate with trust, integrity, and class level experience. We are open for sustainable growth.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;