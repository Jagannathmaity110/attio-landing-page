import React from "react";
import Logo from "../assets/Link SVG .png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1D1F] border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <img src={Logo} />
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12 mt-10">
          {/* Product column */}
          <div className="">
            <h3 className="text-xl font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 hover:text-gray-100"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  Customer stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 hover:text-gray-100s flex items-center"
                >
                  Chrome extension <span className="ml-1">✗</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 hover:text-gray-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  Carrers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 hover:text-gray-100 s"
                >
                  Startup program
                </a>
              </li>
            </ul>
          </div>

          {/* Attio for Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Attio for</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 hover:text-gray-100"
                >
                  Startups
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 hover:text-gray-100"
                >
                  Deal flow
                </a>
              </li>
            </ul>
          </div>
          {/* Support Column */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  Talk to support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  API docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-gray-100"
                >
                  System status
                </a>
              </li>
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Ready to build ?
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-black text-white px-5 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors">
                Start for free
              </button>
              <button className="w-full border border-gray-300 text-gray-700 px-5 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
                Talk to sales
              </button>
            </div>
          </div>
          {/* Bottom Footer */}
          
        </div>
         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Jagannth Maity All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">Terms & Conditions</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">Privacy Policy</a>
          </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
