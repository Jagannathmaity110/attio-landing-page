import React from "react";
import GroupImg from "../assets/Group.png"

const Scale = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Content */}
        <div className="md:w-1/2 w-full md:pr-12">
          <h2 className="text-5xl font-bold text-gray-950">
            Scale with security.
          </h2>
          <p className="text-xl font-medium text-gray-800 mt-5">
            Attio is audited and certified by <br /> industry-leading third-party
            standards.
          </p>
          <div className="flex gap-4 mt-5">
            <button className="bg-black text-lg text-white rounded-xl font-medium px-6 py-3">
              Start for free
            </button>
            <button className="bg-white text-lg text-gray-900 rounded-lg px-6 py-3 border border-gray-900 font-medium">
              Talk to sales
            </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
          <img src={GroupImg} alt="Group" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Scale;
