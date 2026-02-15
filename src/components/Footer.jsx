import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-yellow-400  border-t border-yellow-400/30">

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">

        {/* Company Info with Logo */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img
              src="/logo.jpeg"
              alt="Latur Digital Marketing Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
            />
            <h2 className="text-xl font-bold text-yellow-300">
              Latur Digital Marketing
            </h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            We deliver performance-driven digital marketing and enterprise IT
            solutions to help businesses grow faster and smarter.
          </p>

          <p className="text-sm text-gray-400">
            Empowering brands with strategy, technology, and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/expertise" className="hover:text-yellow-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-6">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Digital Marketing
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Web Development
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Branding & Design
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Software Solutions
            </li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-6">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm text-gray-300 mb-6">
            <li>Email: info@laturdigitalmarketing.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Latur, Maharashtra</li>
          </ul>

          {/* Newsletter */}
          <div>
            <p className="text-sm mb-3 text-yellow-300">
              Subscribe to our newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-gray-200 focus:outline-none"
              />
              <button className="bg-yellow-400 text-gray-900 px-4 rounded-r-lg font-semibold hover:bg-yellow-300 transition">
                Join
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" className="hover:text-yellow-300 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-yellow-400/20 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Latur Digital Marketing. All rights reserved.
      </div>
    </footer>
  );
}
