import React from 'react';

const MissionVision = () => {
  return (
    <section className="bg-[#172554] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
          <div className="w-12 h-12 bg-[#7D12FF] rounded-xl flex items-center justify-center mb-6 text-2xl">🎯</div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-slate-300 leading-relaxed">
            To deliver high-quality, structurally sound developments that redefine the level of our markets. We strive to set new standards in urban construction by prioritizing safety, efficiency, and aesthetic elegance.
          </p>
        </div>
        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
          <div className="w-12 h-12 bg-[#7D12FF] rounded-xl flex items-center justify-center mb-6 text-2xl">👁️‍🗨️</div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-slate-300 leading-relaxed">
            To be the most trusted name in real estate through transparency and sustainable practices. We envision a future where urban living is synonymous with sustainability and community well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;