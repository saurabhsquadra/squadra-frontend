import Image from "next/image";
import React from "react";
import brandStrategyImage from "@/utilities/images/brand-strategy.jpg";
import logoDesignImage from "@/utilities/images/logo-design.jpg";
import graphicDesignImage from "@/utilities/images/graphic-design.jpg";
import visualisationImage from "@/utilities/images/visualization.jpg";
import brandCollateralImage from "@/utilities/images/Brand-collateral.jpg";
import industrialDesignImage from "@/utilities/images/industrial-design.jpg";

const OurServices = () => {
  const services = [
    {
      title: "Brand Strategy & Consulting",
      description:
        "Coating matagin 30 define and elevate your brand identity to a competitive market.",
        image: brandStrategyImage
    },
    {
      title: "Logo Design & Brand Identity",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
        image: logoDesignImage
    },
    {
      title: "Graphic Design",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
        image: graphicDesignImage
    },
    {
      title: "2D/3D Visualisation",
      description:
        "Bringing concepts to life with realistic and engaging visual renderings.",
        image: visualisationImage
    },
    {
      title: "Brand Collateral",
      description:
        "Designing innovative, user-friendly websites that deliver exceptional digital experiences.",
        image: brandCollateralImage
    },
    {
      title: "Industrial Product Design",
      description:
        "Transforming ideas into tangible designs that captivate and convert.",
        image: industrialDesignImage
    },
  ];

  return (
    <div className="h-fit flex flex-col w-full items-center bg-black">
      <div className="max-w-[1500px] flex flex-col gap-2 md:gap-6 items-center py-[72px] lg:py-[161px] bg-black">
        <div className="bg-white px-6 py-2 rounded-lg md:text-[14px] lg:text-[16px] font-semibold">
          TOP RATED
        </div>
        <p className="text-[36px] md:text-5xl lg:text-6xl text-white">Our Services</p>
        <p className="text-gray-500 text-sm lg:text-base max-w-[231px] md:max-w-96 text-center">
          Expand and win in every market with optimised checkout and payments.
        </p>
      </div>

      {/* Services Section */}
      <div className=" w-full lg:max-w-[1500px] flex flex-wrap items-center justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1A1A1D] w-full max-w-[343px] md:max-w-[695px] lg:max-w-[550px] p-[20px] pb-0 md:p-[60px] md:pb-0 lg:p-10 lg:pb-0 rounded-xl shadow-md flex flex-col justify-between gap-5 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-[16px] md:text-[28px] text-white font-semibold">
              {service.title}
            </h3>
            <p className="text-gray-500 text-[12px] md:text-[22px] lg:text-[16px] md:max-w-[520px] lg:max-w-96">{service.description}</p>
            <div className="h-[154px] md:h-[262px] rounded-t-xl bg-gray-700 flex-shrink-0">
              <Image  
                src={service?.image}
                alt={''}
                width={435}
                height={262}
                className="w-full h-full object-cover rounded-xl w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
