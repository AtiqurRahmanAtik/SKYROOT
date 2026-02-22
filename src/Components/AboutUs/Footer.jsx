import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Column 1: Brand & Socials */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-[#7D12FF] rounded flex items-center justify-center text-white font-bold rotate-45 text-xs">
              S
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">Skyroot</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
            A premier corporate real estate developer dedicated to structural excellence and urban innovation.
          </p>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-[#7D12FF] hover:text-white transition shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3.5c0-.83-.67-1.5-1.5-1.5S10 12.67 10 13.5V17H8v-6h2v1.5c.46-.78 1.34-1.5 2.5-1.5 1.38 0 2.5 1.12 2.5 2.5V17z"/></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-[#7D12FF] hover:text-white transition shadow-sm">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h5 className="font-bold text-slate-900 mb-6 text-sm">Quick Links</h5>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li className="hover:text-[#7D12FF] cursor-pointer transition">Completed Projects</li>
            <li className="hover:text-[#7D12FF] cursor-pointer transition">Upcoming Ventures</li>
            <li className="hover:text-[#7D12FF] cursor-pointer transition">Architectural Portfolio</li>
            <li className="hover:text-[#7D12FF] cursor-pointer transition">Legal Documents</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h5 className="font-bold text-slate-900 mb-6 text-sm">Contact</h5>
          <ul className="space-y-5 text-sm text-slate-500 font-medium">
            <li className="flex gap-4 items-start">
              <span className="text-[#7D12FF] mt-0.5 text-lg">📍</span> 
              <span className="leading-relaxed">House 123, Road 45, Gulshan,<br/>Dhaka, Bangladesh</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-[#7D12FF] text-lg">📞</span> 
              <span>+880 1234 567890</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-[#7D12FF] text-lg">✉️</span> 
              <span>info@skyroot-realestate.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto px-6 pt-8 flex flex-col items-center text-xs text-slate-400 gap-3">
        <p>© 2024 Skyroot Real Estate. All rights reserved.</p>
        <div className="flex gap-6 font-medium">
          <span className="hover:text-[#7D12FF] cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-[#7D12FF] cursor-pointer transition">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;