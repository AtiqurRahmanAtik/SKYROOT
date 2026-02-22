import React from 'react';

const Services = () => {
  const services = [
    { title: "Web Development", icon: "🌐", desc: "Modern, responsive, and high-performance websites." },
    { title: "UI/UX Design", icon: "🎨", desc: "Intuitive and beautiful user interfaces tailored to your brand." },
    { title: "Consulting", icon: "💡", desc: "Expert advice to help scale your technological infrastructure." },
    { title: "Maintenance", icon: "🔧", desc: "Ongoing support and updates to keep your systems running flawlessly." }
  ];

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition cursor-pointer">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;