import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="bg-[#0f172a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Stay updated with Skyroot</h3>
            <p className="text-gray-400 text-sm mt-1">Get the latest property listings delivered to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input type="email" placeholder="Email address" className="bg-gray-800 border border-gray-700 text-white p-3 rounded-md outline-none flex-1 md:w-64 focus:border-purple-500" />
            <button className="bg-[#7D12FF] text-white px-6 py-3 rounded-md font-bold hover:bg-purple-700 transition">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="bg-white py-8 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <span className="w-6 h-6 bg-purple-600 rotate-45 flex items-center justify-center text-[10px] text-white">S</span>
            SKYROOT REAL ESTATE
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-600 transition">Facebook</a>
            <a href="#" className="hover:text-purple-600 transition">LinkedIn</a>
            <a href="#" className="hover:text-purple-600 transition">Instagram</a>
          </div>
          <p>© 2024 Skyroot Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;