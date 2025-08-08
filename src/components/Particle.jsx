import React from "react";
import ParticleImg from "../assets/Particle.png";
import MoreImg from "../assets/More.png";
import TestimonialsImg from "../assets/testimonials.png"

const Particle = () => {
  return (
    <section className="bg-[#0F1012] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Powered by Particle section */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          {/* Left: Text Content */}
          <div className="md:w-1/2 w-full md:pr-12">
            <h2 className="text-5xl text-white font-bold">
              Powered by Particle
            </h2>
            <p className="text-white text-xl mt-10">
              And it's all powered by Particle -the data model <br /> for teams
              that want to go-to-market faster
            </p>
            <button className="text-white px-5 py-3 text-lg rounded-xl border border-white mt-10">
              Start for free
            </button>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
            <img
              src={ParticleImg}
              alt="Particle"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* And so much more section */}
        <div className="flex flex-col md:flex-row items-center mt-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 w-full md:pr-12">
            <h2 className="text-5xl text-white font-bold">
              And so much more...
            </h2>
            <p className="text-white text-xl mt-10">
              Your customers are always connceted.
              <br />
              Why should your CRM be any different.
            </p>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
            <img src={MoreImg} alt="More" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Loved by builder Section */}
        <div className="flex flex-col md:flex-row items-center mt-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 w-full md:pr-12">
            <h2 className="text-5xl text-white font-bold">
             Loved by Builders.
            </h2>
            <p className="text-white text-xl mt-10">
             Attio is the customer relationship mannagement tool
              <br />
             For everyone who values collaboration.
            </p>
            <button className="text-white px-7 py-3 text-lg rounded-xl border border-white mt-10">
              More customers stories
            </button>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
            <img src={TestimonialsImg} alt="More" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Particle;
