import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 my-12">
      <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 transition-colors">
        <ChevronLeft size={18} />
      </button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#7c3aed] text-white font-bold shadow-sm">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 font-medium text-gray-700 transition-colors">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 font-medium text-gray-700 transition-colors">3</button>
      <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 font-medium text-gray-700 transition-colors">12</button>
      
      <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 transition-colors">
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;