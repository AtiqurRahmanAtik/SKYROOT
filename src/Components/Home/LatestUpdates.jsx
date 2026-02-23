import React from 'react';

const LatestUpdates = () => {
    
    
    return (
        <>
    <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Latest Updates</h2>
        <a href="#" className="text-[#7D12FF] font-bold text-sm flex items-center gap-1">View All News ↗</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="space-y-4">
            <img src={`https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=60&w=400&auto=format&fit=crop`} className="w-full h-48 object-cover rounded-xl shadow-sm" alt="Update" />
            <div className="flex gap-4 text-[10px] font-bold text-[#7D12FF] uppercase tracking-widest">
              <span>Insights</span> • <span>Oct 12, 2023</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 hover:text-[#7D12FF] cursor-pointer transition">
              The Future of Sustainable Architecture in 2024
            </h4>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-[#1E1B4B] rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-4">Ready to Invest in the Future?</h3>
          <p className="text-indigo-200 mb-8 leading-relaxed">Connect with our investment consultants to explore premium opportunities and bespoke real estate solutions.</p>
          <button className="bg-[#7D12FF] px-8 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto hover:bg-purple-600 transition shadow-lg">
            📅 Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  </section>

        </>
    );
};



<section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Latest Updates</h2>
        <a href="#" className="text-[#7D12FF] font-bold text-sm flex items-center gap-1">View All News ↗</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="space-y-4">
            <img src={`https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=60&w=400&auto=format&fit=crop`} className="w-full h-48 object-cover rounded-xl shadow-sm" alt="Update" />
            <div className="flex gap-4 text-[10px] font-bold text-[#7D12FF] uppercase tracking-widest">
              <span>Insights</span> • <span>Oct 12, 2023</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 hover:text-[#7D12FF] cursor-pointer transition">
              The Future of Sustainable Architecture in 2024
            </h4>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-[#1E1B4B] rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-4">Ready to Invest in the Future?</h3>
          <p className="text-indigo-200 mb-8 leading-relaxed">Connect with our investment consultants to explore premium opportunities and bespoke real estate solutions.</p>
          <button className="bg-[#7D12FF] px-8 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto hover:bg-purple-600 transition shadow-lg">
            📅 Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  </section>
  
  export default LatestUpdates;
