import React from "react";
import RelativeImg from "../assets/relative.png";
import PalletIcon from "../assets/pallet.png";

const Build = () => {
  const features = [
    {
      title: "Build",
      description:
        "Create your dream CRM with powerful,flexible templates for everyuse case.",
      icon: "🛠️",
    },
    {
      title: "Refine",
      description:
        "Use our intuitive UI and ultra-customizable blocks to craft your ideal workflows.",
      icon: "🛠️",
    },
    {
      title: "Work",
      description:
        "Help your business scale with enriched data, custom attributes, and migrations.",
      icon: "🚀",
    },
    {
      title: "Report",
      description:
        "Analyze, track and share reports built on real-time data from across your workspace.",
      icon: "📊",
    },
  ];
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl sm:text-4xl text-gray-950 font-bold justify-start  ">
          Build a CRM that's <br /> truly your own.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-medium mt-5">
          Tweak anything and everything to ensure Attio <br /> fits your
          business,not the other way around.
        </p>
        {/* Features grid */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <span className="text-xl mr-3">{feature.icon}</span>
                <h3 className="text-lg font-light text-gray-800">
                  {feature.title}
                </h3>
              </div>
              {/* Optionally add description here */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image Section Relative image */}
        <div className="w-full flex justify-center items-center mt-20">
          <img
            src={RelativeImg}
            alt="Relative Section Image"
            className="mx-auto h-auto max-h-[70vh] w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Build;
