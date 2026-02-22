import React from 'react';

const Leadership = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="text-[#7D12FF] font-bold text-xs uppercase tracking-[0.2em]">Leadership</span>
        <h2 className="text-4xl font-bold text-slate-900 mt-3">Visionary Guidance</h2>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5 h-80 md:h-auto shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
            alt="CEO" 
            className="w-full h-full object-cover object-top" 
          />
        </div>
        <div className="p-10 md:p-14">
          <h3 className="text-3xl font-bold text-slate-900 mb-1">Ar. Shahed Al Mamun</h3>
          <p className="text-[#7D12FF] font-bold text-sm mb-6">B.Arch (BUET), Managing Director</p>
          
          <div className="text-purple-300 text-5xl font-serif leading-none mb-2">"</div>
          <p className="text-slate-600 italic leading-relaxed mb-8">
            Architecture is not just about buildings, it's about the space that brings people together. Our design philosophy revolves around the harmony between human experience and natural environments. We build with our sight set on sustainability and a commitment to urban progress.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-[#7D12FF] font-bold">S</div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Shahed Al Mamun</p>
              <p className="text-xs text-slate-500">Director of Operations & Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;