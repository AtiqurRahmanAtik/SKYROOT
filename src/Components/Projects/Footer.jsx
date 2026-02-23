import React from 'react';
import { Globe, Share2, Mail, Send } from 'lucide-react';

const Footer = () => {
  return (
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
};

export default Footer;