import React from "react";
import StartUpImg from "../assets/startup.png";
import PartnerShipImg from "../assets/partnership.png";
import TechStackImg from "../assets/Techstack.png";
import DoptImg from "../assets/dopt.png";

const Relationship = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-gray-950 font-bold justify-start  ">
          Real-time relationship <br /> need real-time data.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-medium mt-5">
          Your customers are always connected <br /> -why should your CRM be any
          different.
        </p>

        {/* Instant Visibility -Section */}

        <div className="flex justify-between items-center mt-10 border border-white">
          <div className="lg:w-1/3 mb-70">
            <p className="text-gray-900 text-lg font-light">
              Instant visibility into all your relationship.
              <br />
              Real-time global database of every contact &<br />
              company your business intracts with.
            </p>
          </div>
          <div className="lg:w-2/3">
            <img src={StartUpImg} alt="Feature Section Image" />
          </div>
        </div>

        <div className="flex gap-15 mt-20">
          <div className="lg:w-1/2">
            <p className="text-gray-950 text-xl font-medium">
              Powerfull relationship intel.See all your team's
              <br />
              conversation with a contact or company and
              <br /> create enriched timelines for every interaction.
            </p>
            <img
              src={PartnerShipImg}
              alt="PartnerShip Image"
              className="mt-10"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-950 text-xl font-medium">
              Dream tech stack.Pull in data
              <br />
              form best-in-class SaaS tools
              <br />
              through Attio's world-class
              <br /> API and Zapier intregation.
              <img
                src={TechStackImg}
                alt="Tech stack Image"
                className="mt-10"
              />
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg flex mt-10">
          <img src={DoptImg} alt=" DOPT Icon" className="mb-20 justify-start" />

          {/* Testimonial quote */}
          <blockquote className="text-xl text-gray-700 mb-6 border-l-4 border-blue-500 pl-6 ml-10 mt-10">
            "Attio is the most flexible CRM we've ever come across.We've been
            able to build a world-classs go-to-market engine with it."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Relationship;
