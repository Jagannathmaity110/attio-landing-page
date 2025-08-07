import React from "react";
import Design1Img from "../assets/design1.png";
import Design2Img from "../assets/design2.png";
import Design3Img from "../assets/desing3.png";
import Design4Img from "../assets/design4.png";
import CausalIcon from "../assets/causal.png";

const Design = () => {
  return (
    <section className=" bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold justify-start ml-80 ">
          Designed for <br /> multiplayer.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-medium mt-5 ml-80">
          The first truly multiplayer CRM.After all <br /> the best work doesn't
          come from silos.
        </p>

        <div className="flex ml-80 mt-10 ">
          <div className="lg:w-2/3">
            <p className="text-xl font-medium">
              <span className="font-bold">
                Real-time multiplayer collaboration.
              </span>{" "}
              Collaborate with your <br /> whole team and nail every task the
              first time. See each <br /> other click,change and type in
              real-time.
            </p>
            <img
              src={Design1Img}
              alt="Design Section Image"
              className="mt-10 mr-10"
            />
          </div>
          <div className="lg:w-1/3 mr-80">
            <p className="text-xl font-medium">
              <span className="font-bold">Build from anywhere.</span>Our
              world-class apps <br />
              let you collaborate from anywhere without <br /> compromsing you
              workflow.
            </p>
            <img
              src={Design2Img}
              alt="Design section Image"
              className="mt-10"
            />
          </div>
        </div>

        <div className="flex items-start mt-20 ml-80 gap-20">
          <div className="lg:w-1/3">
            <p className="text-xl font-medium">
              <span className="font-bold">Permission control.</span> Control how
              your <br /> team interacts with your business's
              <br /> collections,view and emails.
            </p>
            <img
              src={Design3Img}
              alt="Design Section Image"
              className="mt-10"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl font-medium">
              <span className="font-bold">Hold that thought.</span>Never lose
              another idea with
              <br /> Attio's real-time collaborative note-taking features.
            </p>
            <img
              src={Design4Img}
              alt="Desgin section Image"
              className="mt-10"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg flex mt-10">
          <img src={CausalIcon} alt=" DOPT Icon" className="mb-20 justify-start" />

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

export default Design;
