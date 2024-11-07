import React, { useState } from "react";
import logo from '../../assests/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bgcolor text-white sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#contact">
              <img src={logo} alt="logo" className="w-[33px] h-[33px]" />
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">Home</a>
            <a href="#about" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">About</a>
            <a href="#services" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">Services</a>
            <a href="#portfolio" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">Portfolio</a>
            <a href="#blogs" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">Blogs</a>
            <a href="#contact" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">Contact</a>
            <button className="bg-white px-3 py-3 rounded-sm hover:bg-orange-700 hover:text-white duration-1000 text-black button-nav">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown for Mobile */}
        <div
          className={`md:hidden text-center z-50 absolute top-16 left-0 w-full bg-[#fcbf4e] transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <a href="#home" className="block py-2 px-4 hover:bg-orange-700" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block py-2 px-4 hover:bg-orange-700" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="block py-2 px-4 hover:bg-orange-700" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" className="block py-2 px-4 hover:bg-orange-700" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#blogs" className="block py-2 px-4 hover:bg-orange-700" onClick={() => setIsOpen(false)}>Blogs</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-orange-700" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-white px-3 py-3 rounded-sm hover:bg-orange-700 hover:text-white duration-1000 text-black my-3" onClick={() => setIsOpen(false)}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
