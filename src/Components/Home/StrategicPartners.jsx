import React from 'react';
import { 
  Triangle, // Represents the compass/A-frame for URBAN.
  Share2,   // Represents the nodes/connections for BUILD_X
  Leaf,     // Represents the leaf for GREENCORE
  Building  // Represents the structure for SOLID_S
} from 'lucide-react';

// --- MOCK DATA ---
const partnersData = [
  {
    id: 1,
    name: 'URBAN.',
    icon: Triangle,
  },
  {
    id: 2,
    name: 'BUILD_X',
    icon: Share2, 
  },
  {
    id: 3,
    name: 'GREENCORE',
    icon: Leaf,
  },
  {
    id: 4,
    name: 'SOLID_S',
    icon: Building,
  },
];

// --- COMPONENT ---
const StrategicPartners = () => {
  return (
    <section className="py-16 bg-white w-full border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <h3 className="text-center text-xs md:text-sm font-bold tracking-[0.25em] text-[#9ca3af] uppercase mb-10">
          Our Strategic Partners
        </h3>

        {/* Partners Logo Flexbox */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
          {partnersData.map((partner) => (
            <div 
              key={partner.id} 
              className="flex items-center gap-2 text-gray-400 hover:text-gray-800 transition-colors cursor-pointer group"
            >
              <partner.icon 
                size={22} 
                strokeWidth={2.5} 
                className="group-hover:text-[#6d28d9] transition-colors" 
              />
              <span className="text-xl md:text-2xl font-black tracking-tighter">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicPartners;