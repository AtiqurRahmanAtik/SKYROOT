import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Building The Future <br /> 
          <span className="text-[#7D12FF]">With Confidence</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Rooted in Trust, Rising To The Sky. We redefine urban landscapes with sustainable, iconic architectural masterpieces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#7D12FF] text-white px-8 py-4 rounded-md font-bold hover:bg-purple-700 transition flex items-center justify-center gap-2">
            Discover Projects <span>→</span>
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-black transition">
            Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;