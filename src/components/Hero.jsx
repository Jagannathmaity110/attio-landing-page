import React from "react";
import HeroImg from "../assets/HeroSection.png";
import CompanyImg from "../assets/Company.png"

const Hero = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Heading  */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-6">
          Customer <br /> relationship magic.
        </h1>
        <p className="text-3xl sm:text-2xl text-gray-900 mb-6">
          Powerful,flexiable and data-dirven, Attio makes it easy
          <br />
          to build the exact CRM your business needs.
        </p>
      </div>
      {/* Divider */}
      <div className="w-24 h-1 bg-gray-200 mx-auto mb-8"></div>
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <button className="px-7 py-3 rounded-lg bg-gray-900 text-white font-medium">
          Start for free
        </button>
        <button className="px-7 py-3 rounded-lg bg-white text-gray-900 border border-gray-950  font-medium">
          Talk to sales
        </button>
      </div>

      {/* Hero Section Image  */}
      <div className="w-full flex justify-center items-center mt-20">
        <img
          src={HeroImg}
          alt="Hero Section Image"
          className="mx-auto h-auto max-h-[70vh] w-auto"
        />
        
      </div>

      {/* Company Section Image */}
      <div className="w-full flex justify-center items-center mt-35">
        <img
        src={CompanyImg}
        alt="Company Section Image "
        className="mx-auto h-auto max-h-[70vh] w-auto"/>

      </div>
    </section>
  );
};

export default Hero;
