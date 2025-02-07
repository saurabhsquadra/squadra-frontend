import Image from "next/image";
import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Brand Strategy & Consulting",
      description:
        "Coating matagin 30 define and elevate your brand identity to a competitive market.",
    },
    {
      title: "Logo Design & Brand Identity",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
    },
    {
      title: "Graphic Design",
      description:
        "Delivering striking visuals that communicate your brand's story with clarity and creativity.",
    },
    {
      title: "2D/3D Visualisation",
      description:
        "Bringing concepts to life with realistic and engaging visual renderings.",
    },
    {
      title: "Brand Collateral",
      description:
        "Designing innovative, user-friendly websites that deliver exceptional digital experiences.",
    },
    {
      title: "Industrial Product Design",
      description:
        "Transforming ideas into tangible designs that captivate and convert.",
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
                src="https://s3-alpha-sig.figma.com/img/3447/fdaf/0721b726292feee33cd8766b60edc96c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O0Zr6kzkwvQAj5sc3S8jo684jc5QeBBxaf~Li1EYeJx0u-HkvgvRP-VjIic7sLuG-IM1wpAFAnMGf5cTqCUbNIMvtTeGC53KjAJF4br-cVh7BMJAhZCyADe6ntFHPDN8FNoLgRCUSZ32Uf3RMPtQkQKmd7L-P~0tPtzaeZsElxrthAZ7ecsCZSXOsuyusfL3Yv6m1S5H9jS~~lg2cscmgBPW-N4u3R2VEhU1OaOUvvUEDtxGYH1Xh225b3mIsO1hOD1n1MPz75OyI67jvzEw-x9zgMERlfx9rUdDNIWkRy58Ncx0-dDeHa1-0zC5pWXqU9x-wM~HlZVKawZFZzERfQ__"
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
