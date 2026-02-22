import React from 'react';

const CtaSection = () => {
  return (
    <section className="px-6 pb-20 bg-white">
      <div className="max-w-6xl mx-auto bg-[#1E293B] rounded-[2rem] p-12 md:p-16 text-center text-white shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to build your future?</h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Connect with our architectural experts today for a consultation on your next residential or commercial project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#7D12FF] px-8 py-3.5 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-md">
            Schedule a Consultation
          </button>
          <button className="w-full sm:w-auto bg-[#334155] px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-600 transition-colors shadow-md text-slate-100">
            Download Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;