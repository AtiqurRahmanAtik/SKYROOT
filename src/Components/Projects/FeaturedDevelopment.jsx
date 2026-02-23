import React from 'react';
import { MapPin } from 'lucide-react';

const FeaturedDevelopment = () => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white my-12">
      <div className="relative w-full md:w-[55%] min-h-[300px] md:min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800" 
          alt="Skyroot Heights Phase II" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-5 left-5 bg-white/95 text-purple-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          Featured Development
        </div>
      </div>
      <div className="p-8 md:p-12 md:w-[45%] flex flex-col justify-center">
        <h4 className="text-purple-600 font-extrabold text-xs tracking-widest uppercase">Ongoing Flagship</h4>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4 leading-tight">Skyroot Heights Phase II</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Experience the pinnacle of luxury living in our most ambitious project yet. Phase II brings 200 new premium apartments with panoramic views of the Mumbai skyline and 25,000 sq ft of world-class amenities.
        </p>
        
        <div className="flex items-center gap-4 text-sm font-semibold text-gray-800 mb-8">
          <div className="flex items-center gap-1.5">
            <MapPin size={18} className="text-purple-600"/> Worli, Mumbai
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div>Est. Completion: 2026</div>
        </div>

        <button className="bg-[#7c3aed] hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold w-max transition-colors shadow-sm shadow-purple-200">
          Explore Exclusive Access
        </button>
      </div>
    </div>
  );
};

export default FeaturedDevelopment;