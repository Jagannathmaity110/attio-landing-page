import React from "react";
import FrameImg from "../assets/Frame.png"

const DreamCRM = () => {
  return (
    <section className="bg-blue-600 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto mb-10">
        {/*Ready to build section */}
        <div className="flex flex-col sm:flex-row items-center mb-20 mr-5">
          {/* Left:content */}
          <div className="md:w-1/2 w-full md:pr-12">
            <h2 className="text-5xl text-white font-bold">
              Ready to build your <br/> team's dream CRM ?
            </h2>
            <div className="flex gap-4 ">
              <button className="text-gray-900 px-5 py-3 text-lg rounded-xl border border-white mt-10 bg-white">
                Start for free
              </button>
              <button className="text-white px-5 py-3 text-lg rounded-xl border border-white mt-10 flex">
                Talk to sales
              </button>
            </div>
          </div>

          <div className="md:w-1/2 w-full gap-19">
          <img src={FrameImg}/>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamCRM;
