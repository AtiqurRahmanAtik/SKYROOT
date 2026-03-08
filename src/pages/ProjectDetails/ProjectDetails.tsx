import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle } from 'lucide-react';

// Use your clean alias (Assuming constants is in your src/components folder):
import { projects } from '@/src/constants';

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>(); // Strongly type the params

  // Search the FULL `projects` array. 
  // We use String() to be safe, just in case JSON imported numbers.
  const project = projects.find((p) => String(p.id) === String(id));

  console.log("URL ID:", id);
  console.log("Found Project:", project);
  console.log("All Projects:", projects);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C4A] mb-4">Project Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          The project with ID "{id}" does not exist, or the URL might be incorrect.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#0B2C4A] text-white px-8 py-4 hover:bg-opacity-90 transition-all duration-300 text-sm font-bold uppercase tracking-widest shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-10 text-gray-500 hover:text-[#0B2C4A] transition-colors font-semibold uppercase tracking-widest text-sm group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Main Project Info Section (Responsive Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
          <div className="space-y-6">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="space-y-8 lg:sticky lg:top-24">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold tracking-widest text-[#0B2C4A] uppercase mb-4 opacity-80">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2C4A] leading-tight mb-6">
                {project.title}
              </h1>
              <div className="w-20 h-1.5 bg-[#0B2C4A]"></div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-10 border-t border-gray-100 mt-8">
              {project.status && (
                <div>
                  <span className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                    <CheckCircle className="w-4 h-4" /> Status
                  </span>
                  <span className="font-bold text-lg text-[#0B2C4A] capitalize">{project.status}</span>
                </div>
              )}

              {project.type && (
                <div>
                  <span className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                    <MapPin className="w-4 h-4" /> Project Type
                  </span>
                  <span className="font-bold text-lg text-[#0B2C4A] capitalize">{project.type}</span>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* NEW SECTION: Project at a Glance & Features */}
        {/* This section uses the primary color background for headers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: PROJECT AT A GLANCE */}
          <div>
            <h2 className="bg-[#0B2C4A] text-white text-xl md:text-2xl font-bold uppercase tracking-widest py-4 px-6 mb-8">
              Project at a Glance
            </h2>
            
            {/* Table-like structure for details */}
            <div className="space-y-4 text-gray-700">
              {/* NOTE: You can replace the hardcoded values below with dynamic data from your 'project' object once you add these fields to your JSON! */}
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Project Name :</span>
                <span>{project.title}</span> {/* Dynamic Value */}
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Address :</span>
                <span>{project.location}</span> {/* Dynamic Value */}
                {/* Example of multi-line address from image: */}
                {/* <span>Main Road, Ukil Para, Naogaon.<br/>(Zilla Porishod Dak Banglo, Naogaon)</span> */}
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Land Area :</span>
                <span>9.5 Katha</span>
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Building Type :</span>
                <span className="capitalize">{project.type}</span> {/* Dynamic Value */}
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Facing :</span>
                <span>South</span>
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Building Height :</span>
                <span>G + 8</span>
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Units Per floor :</span>
                <span>4 Nos.</span>
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Total Units :</span>
                <span>32 Nos.</span>
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Apartment Sizes :</span>
                <span>
                  Unit A- 2000 Sft, Unit B- 1300 Sft<br />
                  Unit C- 1350 Sft, Unit D- 1350 Sft.
                </span>
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Parkings :</span>
                <span>13 Nos.</span>
              </div>
              <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                <span className="font-semibold">Consultant :</span>
                <span>Dot Arch View</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FEATURES */}
          <div>
            <h2 className="bg-[#0B2C4A] text-white text-xl md:text-2xl font-bold uppercase tracking-widest py-4 px-6 mb-8">
              Features
            </h2>
            
            {/* 2-Column List of Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 font-semibold">
              {/* NOTE: These can also be dynamically mapped if you add a 'features' array to your JSON */}
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>GRAND ENTRY</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>LANDSCAPE</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>RECEPTION</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>LOBBY</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>LOUNGE</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>GUARD ROOM</li>
              </ul>
              <ul className="space-y-3 md:mt-0 mt-3">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>LIFT-02</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>FIRE STAIR</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>FIRE EXTINGUISHER</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>ELECTRIC & GENATOR ROOM</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>INTERCOM</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0B2C4A]"></div>CC CAMERA</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};