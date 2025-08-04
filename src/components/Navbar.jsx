import React from "react";
import LogoImg from "../assets/Logo.png";
import { Menu } from "react-feather";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Left side -Logo */}
        <div className="flex-shrink-0 flex items-center ml-30">
          <img src={LogoImg} />
        </div>
        {/* Center -Naviagation links (Hidden on mobile ) */}
        <div className="flex-1 flex justify-start ml-20">
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#"
              className="text-black hover:text-gray-800 text-lg font-bold"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 text-lg font-bold"
            >
              Changelog
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 text-lg font-bold"
            >
              Help
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 text-lg font-bold"
            >
              Carrers
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 text-lg font-bold"
            >
              Pricing
            </a>
          </div>
        </div>
        {/* Right side  */}
        <div className="flex items-center space-x-4 mr-50">
          <button className="hidden md:inline-flex items-center px-6 py-3 border border-gray-300 text-xl font-medium rounded-md text-gray-700 hover:bg-gray-50">
            Sign in
          </button>
          <button className="hidden md:inline-flex items-center px-6 py-3 bg-black text-white font-medium text-xl rounded-full">
            Start for free
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden p-1 text-gray-500 hover:text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
