import React from 'react';

const ContactMain = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white">
      
      {/* Left: Contact Form (7 Columns) */}
      <div className="lg:col-span-7">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
        <p className="text-gray-500 mb-8">Have a specific project in mind or just want to say hello? Fill out the form and we'll get back to you within 24 hours.</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-700">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-700">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-700">Phone Number</label>
              <input type="text" placeholder="+880 1XXX XXXXXX" className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-700">Inquiry Type</label>
              <select className="w-full p-3 border border-gray-200 rounded-md bg-white outline-none">
                <option>Sales Inquiry</option>
                <option>Rentals</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-700">Message</label>
            <textarea rows="5" placeholder="Tell us more about your interest..." className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          </div>
          <button className="w-full py-4 bg-[#7D12FF] text-white font-bold rounded-md hover:bg-purple-700 transition flex items-center justify-center gap-2">
            Submit Request <span>➤</span>
          </button>
        </form>
      </div>

      {/* Right: Info Cards (5 Columns) */}
      <div className="lg:col-span-5 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center sm:text-left">
            <div className="text-purple-600 mb-2">📞</div>
            <h3 className="font-bold text-gray-900">Call Us</h3>
            <p className="text-xs text-gray-500">Mon-Fri from 9am to 6pm.</p>
            <p className="text-purple-600 font-bold mt-1">+88 01818-100 503</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center sm:text-left">
            <div className="text-purple-600 mb-2">✉️</div>
            <h3 className="font-bold text-gray-900">Email Us</h3>
            <p className="text-xs text-gray-500">Our team is here to help.</p>
            <p className="text-purple-600 font-bold mt-1">info@skyrootre.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Our Offices</h3>
          <div className="space-y-4">
            {['Aftab Nagar Branch', 'Mohammadpur Branch'].map((branch, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-sm cursor-pointer transition">
                <div className="w-20 h-14 bg-gray-200 rounded shrink-0"></div>
                <div>
                  <h4 className="font-bold text-sm">{branch}</h4>
                  <p className="text-xs text-gray-500">Sector 1, Road 4, House 12, Dhaka, Bangladesh</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;