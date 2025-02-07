"use client";
import React, { useState, useRef } from "react";

const ScrollQuoteSelector = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);
  const isScrollingRef = useRef(false);

  const services = [
    "Brand Positioning",
    "Brand Identity",
    "2D/3D Visualisation",
    "Graphic Design",
    "Design Support",
    "Logo Design",
    "Creative Direction",
  ];

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleWheel = (e) => {
    if (!isHovering) return;

    if (isScrollingRef.current) return;

    isScrollingRef.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (e.deltaY > 0) {
      setActiveIndex((prev) => Math.min(prev + 1, services.length - 1));
    } else {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    timeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 300);
  };

  return (
    <div className="bg-black py-36 w-full">
      <div className="w-full flex items-center justify-center">
        <div
          className="w-full max-w-[1400px] flex items-center justify-between"
          style={{ fontSize: "calc(3vw + 15px)" }}
        >
          {/* Fixed "I NEED" text */}
          <div className="text-white font-bold pl-4 min-w-48">I NEED</div>

          {/* Scrolling services container */}
          <div
            className="w-full max-w-[800px] relative h-[400px] flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}
          >
            <div className={`absolute w-full transition-all duration-300'}`}>
              {/* Service items */}
              <div className="relative flex flex-col items-start justify-center h-[400px]">
                {services.map((service, index) => {
                  const distance = Math.abs(index - activeIndex);
                  const scale =
                    distance === 0
                      ? 1
                      : distance === 1
                      ? 0.9
                      : distance === 2
                      ? 0.8
                      : distance === 3
                      ? 0.7
                      : 0;
                  const opacity =
                    distance === 0
                      ? 1
                      : distance === 1
                      ? 0.5
                      : distance === 2
                      ? 0.3
                      : distance === 3
                      ? 0.1
                      : 0;
                  const yOffset = (index - activeIndex) * 80;

                  return (
                    <div
                      key={index}
                      className={`transform transition-all duration-500 text-5xl ease-in-out cursor-pointer absolute w-full origin-left
                                                ${
                                                  index === activeIndex
                                                    ? "text-white"
                                                    : "text-gray-300"
                                                }
                                                hover:text-white`}
                      style={{
                        transform: `translateY(${yOffset}px) scale(${scale})`,
                        opacity,
                        fontWeight: index === activeIndex ? "300" : "300",
                        letterSpacing: "-0.02em",
                        left: 0,
                        right: 0,
                        textAlign: "left",
                        top: "53%",
                        marginTop: "-36px",
                        willChange: "transform, opacity",
                        transformOrigin: "left center",
                      }}
                      onClick={() => setActiveIndex(index)}
                    >
                      {service}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hover indicator */}
            {isHovering && (
              <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-1 h-24 bg-white/10 rounded-full relative">
                    <div
                      className="absolute w-1 bg-white rounded-full transition-all duration-300"
                      style={{
                        top: `${(activeIndex / (services.length - 1)) * 100}%`,
                        height: `${100 / services.length}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* GET A QUOTE button */}
          <div className="ml-auto flex items-center absolute right-2 lg:right-10 lg:gap-2">
            <button
              className={`text-white text-lg transition-all duration-300
                                ${
                                  isHovering ? "opacity-50" : "hover:opacity-80"
                                }`}
              style={{ width: "200px" }}
            >
              GET A QUOTE
            </button>
            <svg
              className={`w-6 h-6 text-white transition-all duration-300
                                ${isHovering ? "opacity-50" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollQuoteSelector;
