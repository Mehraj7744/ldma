import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide / Show on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinkClasses = ({ isActive }) =>
    `relative px-3 py-2 transition duration-300 ${
      isActive
        ? "text-yellow-300 font-semibold"
        : "text-yellow-400 hover:text-yellow-300"
    }`;

  const activeUnderline = ({ isActive }) =>
    isActive
      ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400 after:content-['']"
      : "";

  return (
    <div
      className={`fixed top-4 left-0 w-full z-50 flex justify-center px-4 
      transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <nav className="w-full max-w-7xl 
                      bg-gray-900/50 
                      backdrop-blur-lg 
                      border border-yellow-400/40 
                      rounded-4xl 
                      shadow-xl 
                      text-yellow-400">

        <div className="px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="Latur Digital Marketing Logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
            />
            <span className="text-xl font-bold tracking-wide">
              Latur Digital Marketing
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">

            <NavLink to="/" className={(props) => `${navLinkClasses(props)} ${activeUnderline(props)}`}>
              Home
            </NavLink>

            <NavLink to="/about" className={(props) => `${navLinkClasses(props)} ${activeUnderline(props)}`}>
              About
            </NavLink>

            <NavLink to="/expertise" className={(props) => `${navLinkClasses(props)} ${activeUnderline(props)}`}>
              Services
            </NavLink>

            <NavLink to="/contact" className={(props) => `${navLinkClasses(props)} ${activeUnderline(props)}`}>
              Contact
            </NavLink>

            <NavLink
              to="/contact"
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Get Quote
            </NavLink>

          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/70 backdrop-blur-md rounded-b-2xl px-6 py-4 space-y-4 border-t border-yellow-400/30">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            <NavLink to="/expertise" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>

            <NavLink
              to="/contact"
              className="block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-center"
            >
              Get Quote
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}
