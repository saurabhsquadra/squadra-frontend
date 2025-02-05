import React, { useState, useEffect } from "react";
import icon1 from "@/utilities/icons/approch_icon_1.svg";
import icon2 from "@/utilities/icons/approch_icon_2.svg";
import icon3 from "@/utilities/icons/approch_icon_3.svg";
import icon4 from "@/utilities/icons/approch_icon_4.svg";
import icon5 from "@/utilities/icons/approch_icon_5.svg";

import Image from "next/image";

// Dynamically import images based on the tab index

import Approch_img_5 from "@/utilities/images/Approch_img_5.svg";

const ApproachComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const TAB_DURATION = 5000; // 5 seconds per tab

  const tabs = [
    {
      title: "Laying the Foundation",
      content:
        "We begin by understanding your unique challenges and requirements through in-depth consultation.",
        description: "We help entrepreneurs craft their brand identity and build a solid digital foundation",
      title1: "Branding",
      body1: "Names, logos, and visual identities that reflect their vision.  ",
      title2: "Website Design",
      body2: "Stunning, user-friendly websites created by our IT experts.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/strategy.webp", // Image for the first tab
      icon: icon1,
    },
    {
      title: "Creative Visibility",
      content:
        "Managed by Squadra Media, we handle social media marketing, SEO, and ads to drive awareness and engagement.",
      description: "Planning and strategic framework development",
      title1: "Production",
      body1:
        "Our creative team at Slay It Right produces high-quality videos, advertisements, and cinematic campaigns.",
      title2: "Animation",
      body2:
        "Through Squadraverse, we craft immersive animations, explainer videos, and AR/VR experiences.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/brand.webp", // Image for the second tab
      icon: icon2,
    },
    {
      title: "Scaling Operations",
      content:
        "As businesses grow, we help entrepreneurs manage their expanding needs.",
      description: "Building and implementing core functionalities",
      title1: "HR Services",
      body1: "Hiring the right people and building a strong workforce.",
      title2: "Accounts Services",
      body2: " Managing finances, taxes, and compliance. ",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/relation.webp", // Image for the third tab
      icon: icon3,
    },
    {
      title: "Driving Sales & Expansion",
      content: "We empower businesses to reach new heights.",
      description: "Quality assurance and performance optimization",
      title1: "Sales Enablement",
      body1: "Strategies, tools, and processes to boost revenue.",
      title2: "Investment Support",
      body2: "Helping entrepreneurs connect with investors and scale globally.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/marketing.webp", // Image for the fourth tab
      icon: icon4,
    },
    {
      title: "Enabling Excellence",
      content:
        "For sustained success, we provide training and technology solutions",
        description:'For sustained success, we provide training and technology solutions.',
      title1: "E-Learning Solutions ",
      body1: "Customized training modules for employee development.",
      title2: "ERP & CRM Systems",
      body2:
        "Technology solutions to optimise workflows and streamline operations.",
      image: Approch_img_5, // Image for the fifth tab
      icon: icon5,
    },
  ];

  useEffect(() => {
    let startTime:number = 0;
    let animationFrame:number;

    const animate = (currentTime:number) => {
      if (!startTime) startTime = currentTime;
      if (!isAnimating) {
        startTime = currentTime - (progress / 100) * TAB_DURATION;
      }

      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min((elapsedTime / TAB_DURATION) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        startTime = currentTime;
        setProgress(0);
        setActiveTab((prev) => (prev + 1) % tabs.length);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isAnimating, progress, tabs.length]);

  const handleTabClick = (index:number) => {
    setIsAnimating(false);
    setActiveTab(index);
    setProgress(0);
    setTimeout(() => setIsAnimating(true), 100);
  };

  return (
    <div className="flex bg-white flex-col md:flex-row mx-auto p-6 py-[62px] gap-8 lg:gap-16">
      {/* Left Section */}
      <div className="w-full  max-w-[480px]">
        <h2 className="text-[32px] md:text-[40px] font-bold mb-8 text-gray-800">
          <strong className="text-[#FBAE17] font-[700] ">Our Approach:</strong>{" "}
          Effortless, efficient solutions.
        </h2>

        <div className="lg:max-w-[480px] md:max-w-[361px] mt-[62px]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`space-y-2 transition-all h-full border-l-2 md:border-l-4 border-b-0 duration-300 ${
                activeTab === index ? "border-[#06135B]" : ""
              }`}
            >
              <div
                className={`flex items-center gap-4 cursor-pointer py-3`}
                onClick={() => handleTabClick(index)}
              >
                {/* Image at the top of the title */}
                <div
                  className={`relative transition-all flex-shrink-0 ${
                    activeTab === index
                      ? "w-[50px] h-[50px] ml-[30px]"
                      : "w-[50px] h-[50px] ml-[30px]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full ${
                      activeTab === index
                        ? "bg-white"
                        : "bg-gray-100 opacity-40"
                    } flex items-center justify-center`}
                  >
                    <Image width={0} height={0}
                      src={tab.icon}
                      alt="tab icon"
                      className={` transition-all duration-300 ${
                        activeTab === index
                          ? "filter-none"
                          : "filter grayscale" 
                      }`}
                    />
                  </div>

                  {/* Progress Circle - Only shown for active tab */}
                  {activeTab === index && (
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      className="absolute inset-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="23"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="25"
                        cy="25"
                        r="23"
                        stroke="#06135B"
                        strokeWidth="2"
                        fill="#06135B3D"
                        strokeDasharray="144.51"
                        strokeDashoffset={144.51 - (144.51 * progress) / 100}
                        style={{
                          transition: "stroke-dashoffset 0.3s ease-out",
                        }}
                      />
                    </svg>
                  )}
                </div>

                <div>
                  <div
                    className={`font-medium transition-all duration-300 ${
                      activeTab === index
                        ? "text-black text-[20px] font-semibold mb-2"
                        : "text-gray-400 hover:text-blue-500"
                    }`}
                  >
                    {tab.title}
                  </div>
                  <div
                    className={`text-sm font-[300] text-gray-500 max-w-[268px] transition-all duration-300 overflow-hidden ${
                      activeTab === index ? "h-auto" : "h-0"
                    }`}
                  >
                    {tab.description}
                  </div>
                </div>
              </div>
              <div
                className={`md:hidden flex flex-col gap-[28px] transition-all duration-500 items-center overflow-hidden bg-white w-full border-b-0 mt-4  md:mt-0 ${
                  activeTab === index ? "h-[450px] p-6" : "h-0"
                } `}
              >
                <Image width={200} height={246} 
                  src={tab.image} // Dynamically loaded image for each tab
                  alt={`Approach Image`}
                  className="w-full h-[246px] object-cover rounded-[18px]"
                />
                <div className="">
                  <h3 className="text-[16px] md:text-[18px] leading-[20px] font-semibold">
                    {tab.title1}:
                  </h3>
                  <p className="text-[#717171] font-[300] leading-[18px] leading-relaxed mb-4">
                    {tab.body1}
                  </p>
                  <h3 className="text-[16px] md:text-[18px] leading-[20px] font-semibold">
                    {tab.title2}:
                  </h3>
                  <p className="text-[#717171] font-[300] leading-[18px] leading-relaxed">
                    {tab.body2}
                  </p>
                </div>
              </div>
              {/* Description (only shown for active tab) */}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full hidden md:flex flex-col gap-[12px] md:mt-24 lg:max-w-[480px]  md:max-w-[361px] md:mt-0">
        <Image width={513} height={384}
          src={tabs[activeTab].image} // Dynamically loaded image for each tab
          alt={`Approach Image`}
          className="w-[513px] h-[384px] object-cover my-[52px] rounded-[24px]"
        />
        <div className="">
          <h3 className="text-[18px] leading-[20px] font-semibold">
            {tabs[activeTab].title1}:
          </h3>
          <p className="text-gray-500 font-[300] text-[16px] leading-[20px]">
            {tabs[activeTab].body1}
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-[18px] font-semibold leading-[20px]">
            {tabs[activeTab].title2}:
          </h3>
          <p className="text-gray-500 font-[300] text-[16px] leading-[20px]">
            {tabs[activeTab].body2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApproachComponent;