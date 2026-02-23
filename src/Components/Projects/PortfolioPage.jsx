import React, { useState } from 'react';
import { 
  Download, 
  ListFilter, 
  MapPin, 
  Globe, 
  Share2, 
  Mail, 
  Send,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- MOCK DATA ---
const projectsData = [
  {
    id: 1,
    title: 'Skyroot Heights',
    location: 'Mumbai, India',
    status: 'ONGOING',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400',
    priceLabel: 'STARTING FROM',
    priceValue: '$1.2M',
  },
  {
    id: 2,
    title: 'The Emerald Grove',
    location: 'London, UK',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    priceLabel: 'MARKET VALUE',
    priceValue: '$4.5M',
  },
  {
    id: 3,
    title: 'Urban Oasis',
    location: 'Dubai, UAE',
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400',
    priceLabel: 'REGISTRATION OPEN',
    priceValue: 'Q4 2024',
  },
  {
    id: 4,
    title: 'Azure Residences',
    location: 'Singapore',
    status: 'ONGOING',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400',
    priceLabel: 'STARTING FROM',
    priceValue: '$2.1M',
  },
  {
    id: 5,
    title: 'Zenith Villas',
    location: 'Bali, Indonesia',
    status: 'COMPLETED',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400',
    priceLabel: 'SOLD OUT',
    priceValue: '-',
  },
  {
    id: 6,
    title: 'Lumina Towers',
    location: 'New York, USA',
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80&w=400',
    priceLabel: 'STARTING FROM',
    priceValue: '$3.8M',
  }
];

// --- COMPONENTS ---

const Badge = ({ status }) => {
  const colors = {
    ONGOING: 'bg-purple-600 text-white',
    COMPLETED: 'bg-green-500 text-white',
    UPCOMING: 'bg-orange-500 text-white',
  };

  return (
    <span className={`px-2 py-1 text-[10px] font-bold tracking-wider rounded uppercase ${colors[status]}`}>
      {status}
    </span>
  );
};

const ProjectCard = ({ project }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="relative h-48 w-full bg-gray-100">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3">
        <Badge status={project.status} />
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
      <div className="flex items-center text-gray-500 mt-1 text-sm">
        <MapPin size={14} className="mr-1" />
        {project.location}
      </div>
      <div className="flex justify-between items-end mt-6">
        <div>
          <p className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">{project.priceLabel}</p>
          <p className="font-bold text-lg text-purple-900">{project.priceValue}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const FeaturedDevelopment = () => (
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

const Footer = () => (
  <footer className="bg-[#fafafa] border-t border-gray-200 pt-16 pb-8 mt-16 text-sm">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Col */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-[#7c3aed] rotate-45 rounded-sm flex items-center justify-center text-white">
              <div className="w-2 h-2 bg-white -rotate-45"></div>
            </div>
            <span className="font-extrabold text-lg text-gray-900">Skyroot Real Estate</span>
          </div>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Building future-ready sustainable urban environments that redefine luxury and comfort across the globe.
          </p>
          <div className="flex gap-4 text-gray-600">
            <Globe size={18} className="cursor-pointer hover:text-purple-600" />
            <Share2 size={18} className="cursor-pointer hover:text-purple-600" />
            <Mail size={18} className="cursor-pointer hover:text-purple-600" />
          </div>
        </div>

        {/* Properties Links */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Properties</h4>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-purple-600 transition-colors">Residential</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Commercial</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Retail</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Industrial</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-purple-600 transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Press Kit</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Stay updated with our latest project launches and investment opportunities.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white border border-gray-200 rounded-l-md px-4 py-2 w-full outline-none focus:border-purple-500"
            />
            <button className="bg-[#7c3aed] hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition-colors flex items-center justify-center">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        <p>&copy; 2024 SKYROOT REAL ESTATE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-700">PRIVACY POLICY</a>
          <a href="#" className="hover:text-gray-700">TERMS OF SERVICE</a>
          <a href="#" className="hover:text-gray-700">COOKIE POLICY</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const tabs = ['All Projects', 'Upcoming', 'Ongoing', 'Completed'];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Portfolio</h1>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Discover Skyroot's commitment to architectural excellence and sustainable urban development through our diverse range of world-class residential and commercial projects.
            </p>
          </div>
          <button className="mt-6 md:mt-0 border border-gray-300 hover:bg-gray-50 font-semibold text-sm px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors">
            <Download size={16} /> Download Brochure
          </button>
        </div>

        {/* Filters & Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 mb-8 pb-2">
          <div className="flex gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold text-sm whitespace-nowrap pb-2 border-b-2 transition-colors -mb-[10px] ${
                  activeTab === tab 
                    ? 'border-[#7c3aed] text-[#7c3aed]' 
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-gray-900">
            <ListFilter size={16} /> Sort by: Newest
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Featured Section */}
        <FeaturedDevelopment />

        {/* Pagination */}
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

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}