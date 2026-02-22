import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { title: "Structural Integrity", desc: "A corresponding sequence of events makes our buildings reliably sound against the elements." },
    { title: "Design Innovation", desc: "Pushing the boundaries of modern architecture to maximize space and natural light." },
    { title: "Full Transparency", desc: "Clear communication and honest business practices during every phase of development." },
    { title: "Sustainability", desc: "Eco-friendly, sustainable materials that minimize environmental impact and promote green living." },
    { title: "On Time Delivery", desc: "Strict project management ensures your dream property is handed to you precisely when promised." },
    { title: "24/7 Support", desc: "Dedicated customer care module ready to assist you through your home-buying journey." },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 pr-6 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Skyroot?</h2>
          <p className="text-slate-500 mb-6 text-sm leading-relaxed">
            We don't just build properties. We build legacies and communities. Here is why we are the right partner for your dream urban home.
          </p>
          <button className="text-[#7D12FF] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            View All Projects <span>→</span>
          </button>
        </div>

        {features.map((feature, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 bg-purple-100 text-[#7D12FF] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;