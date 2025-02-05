'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

import clientTorque from "../../../utilities/icons/clent-torque.svg";
import clientHMG from "../../../utilities/icons/client-HMGroup.webp";
import clientBroncos from "../../../utilities/icons/client-broncos.webp";
import clientDaddy from "../../../utilities/icons/client-daddy.webp";
import clientDoubleTree from "../../../utilities/icons/client-doubleTree.webp";
import clientFerns from "../../../utilities/icons/client-ferns.webp";
import clientGRC from "../../../utilities/icons/client-grConst.webp";
import clientGREE from "../../../utilities/icons/client-gree.webp";
import clientHabitat from "../../../utilities/icons/client-habitat.webp";
import clientOneSta from "../../../utilities/icons/client-onesta.webp";
import clientPOI from "../../../utilities/icons/client-poi.webp";
import clientS1522 from "../../../utilities/icons/client-street1522.webp";
import clientVOIA from "../../../utilities/icons/client-voia.webp";
import clientVIDA from "../../../utilities/icons/client-vida.webp";
import clientNior from "../../../utilities/icons/client-cafeNior.webp";

function ClientsSection() {
  const logos = [
    { name: "VIDA", url: clientVIDA },
    { name: "Brand 8", url: clientTorque },
    { name: "E-ZONE", url: clientVOIA },
    { name: "Brand 3", url: clientPOI },
    { name: "GREE", url: clientGREE },
    { name: "Habitat India", url: clientHabitat },
    { name: "Double Tree", url: clientDoubleTree },
    { name: "Brand 10", url: clientBroncos },
    { name: "Cafe Noir", url: clientFerns },
    { name: "Brand 9", url: clientHMG },
    { name: "Brand 11", url: clientDaddy },
    { name: "Brand 12", url: clientOneSta },
    { name: "Brand 13", url: clientGRC },
    { name: "Brand 14", url: clientS1522 },
    { name: "Brand 15", url: clientNior },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [logos.length]);

 
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-8 md:py-12 lg:py-24">
      {/* Grid Layout for larger screens */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-0 bg-white rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <div className="relative w-full h-28">
              <Image
                src={logo.url}
                alt={`${logo.name} logo`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-contain filter transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel for mobile screens */}
      <div className="md:hidden overflow-x-hidden">
        <div className="flex transition-all duration-300" style={{ transform: `translateX(-${scrollIndex * 50}%)` }}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[40%] p-2 bg-white rounded-sm  gap-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <div className="relative w-full h-28">
                <Image priority
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-contain filter transition-all duration-300"
                />
              </div>
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={index + logos.length}
              className="flex-shrink-0 w-[40%] p-2 bg-white rounded-sm  gap-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <div className="relative w-full h-28">
                <Image priority
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-contain filter transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ClientsSection;
