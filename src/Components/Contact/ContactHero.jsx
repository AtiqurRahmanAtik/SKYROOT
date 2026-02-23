import React from 'react';

const ContactHero = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center text-white text-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>
      </div>
      
      <div className="relative z-10 px-4">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Get In Touch</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Let's build your future together. Reach out to our dedicated team for expert real estate guidance.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;