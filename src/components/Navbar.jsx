import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 items-center w-full h-full bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      <button
        className="text-black text-3xl absolute top-5 right-8"
        onClick={() => setIsOpen(false)}
      >
        ×
      </button>
      <ul className="space-y-8 text-2xl text-black">
        <li onClick={() => setIsOpen(false)}>
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link to="/projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
        <a
          href="/cv.pdf"
          className="text-white px-6 py-2 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          CV
        </a>
        </li>
      </ul>
    </div>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-400 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="h-10 mr-4 rounded-full"
            />
          </Link>
          <h1 className="text-2xl font-semibold">Fullstack Developer</h1>
        </div>

        
        <button
          className="md:hidden block text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white px-6 py-2 hover:text-black">
            Home
          </Link>
          <Link to="/projects" className="text-white px-6 py-2 hover:text-black">
            Projects
          </Link>
          <Link to="/contact" className="text-white px-6 py-2 hover:text-black">
            Contact
          </Link>
          <a
            href="/cv.pdf"
            className="text-white px-6 py-2 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            CV
          </a>
        </div>
      </div>

      
      {isOpen && <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
