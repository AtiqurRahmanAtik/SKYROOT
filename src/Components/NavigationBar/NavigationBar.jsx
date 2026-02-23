import { Link, NavLink } from "react-router";


const NavigationBar = () => {

  // Dynamic styling function for NavLinks to match the image's active state
  const navLinkStyles = ({ isActive }) => 
    `text-sm font-bold pb-1 transition-colors duration-200 ${
      isActive 
        ? "text-[#7C3AED] border-b-2 border-[#7C3AED]" // Purple text & underline when active
        : "text-gray-500 hover:text-[#7C3AED]"         // Gray text, purple on hover when inactive
    }`;

  const pageLinks = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className={navLinkStyles}>About Us</NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={navLinkStyles}>Projects</NavLink>
      </li>
      <li>
        <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm px-4 md:px-8 py-3">
      {/* --- Left Side: Mobile Toggle & Logo --- */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          {/* Mobile Menu Dropdown */}
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-4 shadow-lg space-y-4"
          >
            {pageLinks}
          </ul>
        </div>
        
        {/* SKYROOT Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          {/* Custom SVG for the purple logo icon */}
          <svg className="w-7 h-7 text-[#7C3AED]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 6.4L21 6.8l-4.6 5.2 3.8 6-6.4-2.4-6.4 2.4 3.8-6-4.6-5.2 6.6 1.6L12 2z" />
          </svg>
          <span className="text-xl font-extrabold text-black tracking-wide">SKYROOT</span>
        </Link>
      </div>

      {/* --- Center: Desktop Navigation Links --- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center space-x-8">
          {pageLinks}
        </ul>
      </div>

      {/* --- Right Side: Call to Action Button --- */}
      <div className="navbar-end">
        <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-2.5 px-6 rounded-md transition-all shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] border-none text-sm">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;