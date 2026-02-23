import React from 'react';

const Footer = () => {
    return (
        <>

        <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-[#7D12FF] rounded flex items-center justify-center text-white font-bold rotate-45">S</div>
          <span className="font-black text-xl tracking-tighter">SKYROOT.</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">Leading the evolution of real estate with trust, integrity, and innovative architectural vision.</p>
        <div className="flex gap-4">
          {['🌐', '💼', '🔗'].map((icon, i) => (
            <div key={i} className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-50 transition">{icon}</div>
          ))}
        </div>
      </div>

      <div>
        <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Quick Links</h5>
        <ul className="space-y-4 text-sm text-slate-500">
          {['About Company', 'Our Projects', 'Latest News', 'Contact Support'].map(link => (
            <li key={link} className="hover:text-[#7D12FF] cursor-pointer transition">{link}</li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Legal</h5>
        <ul className="space-y-4 text-sm text-slate-500">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map(link => (
            <li key={link} className="hover:text-[#7D12FF] cursor-pointer transition">{link}</li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Contact Info</h5>
        <ul className="space-y-4 text-sm text-slate-500">
          <li className="flex items-start gap-3">📍 <span>88 Skyway Tower, Suite 402, New York, NY</span></li>
          <li className="flex items-center gap-3">✉️ <span>hello@skyroot.com</span></li>
          <li className="flex items-center gap-3">📞 <span>+1 (212) 555-0199</span></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs gap-4">
      <p>© 2024 Skyroot Real Estate. All rights reserved.</p>
      <p>Made with ❤️ by <span className="text-[#7D12FF] font-bold">Skyroot Design</span></p>
    </div>
  </footer>
            
        </>
    );
};

export default Footer;