"use client";

import React from "react";
import Services from "./components/Services";
import ServicesCarousel from "./components/ServicesCarousel";

const DesktopUi = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-white">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 top-16"
          style={{
            backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Animated Lines */}
        <div className="absolute w-full top-[164px] animate-[moveRight_6s_linear_infinite] flex items-center">
          <div
            className="w-full h-[1px] bg-yellow-400"
            style={{
              clipPath: "polygon(100% 100%, 100% 0, 0 50%)",
            }}
          />

          <div className="absolute right-0 mt-2 w-2 h-2 rounded-full bg-yellow-400 transform -translate-y-1/2" />
        </div>

        {/* Second Animated Line with Circle */}
        <div className="absolute w-full bottom-[65px] animate-[moveLeft_6s_linear_infinite] flex items-center">
          <div
            className="w-full h-[1px] bg-yellow-400"
            style={{
              clipPath: "polygon(0 100%, 100% 50%, 0 0)",
            }}
          />
          <div className="absolute left-0 mt-2 w-2 h-2 rounded-full bg-yellow-400 transform -translate-y-1/2" />
        </div>

        <style jsx>{`
          @keyframes moveRight {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(100%);
            }
          }
          @keyframes moveLeft {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}</style>

        <div className="absolute inset-0 flex flex-col items-center justify-between text-center">
          <p className="transparent">.</p>
          <div className="flex flex-col items-center">
            <h1 className="text-[46px] md:text-6xl lg:text-[140px]  text-gray-400 w-[300px] md:w-full lg:mb-4">
              Our{" "}
              <strong className="text-[#FBAE17] font-normal">Services</strong>
            </h1>
            <p className="text-[13px] md:text-[16px] lg:text-xl w-[300px] md:w-[554px]">
              Transforming ideas into impactful solutions through our dedicated
              services.
            </p>
          </div>
          <p className="text-white flex gap-2 mb-4 text-[13px] justify-center w-[300px] md:w-full md:text-[16px]">
            {/* <ArrowDown size={20} /> Scroll to explore */}
          </p>
        </div>
      </div>
      <div className="w-full">
        <ServicesCarousel />
      </div>
      <div className="w-full">
        <Services />
      </div>
    </>
  );
};

export default DesktopUi;
