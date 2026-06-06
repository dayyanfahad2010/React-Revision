import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dayyan
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105">
            Get Started
          </button>

          {/* Mobile Menu Button */}
            <button
  className="md:hidden text-2xl"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? "✕" : "☰"}
</button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 border-t pt-4">
            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkStyle}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <button className="bg-blue-600 text-white py-2 rounded-xl mt-2">
              Get Started
            </button>
          </div>
        )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


