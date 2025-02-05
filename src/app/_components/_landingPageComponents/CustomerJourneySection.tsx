'use client'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import image2 from '@/utilities/images/Sol-2.webp'
function CustomerJourneySection() {
  const services = [
    {
      title: "Brand Identity &\nLogo Design",
      description: "Our team designs logos that capture your vision and values.",
      image: "https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/brand.webp", 
      video: "https://squadra-media.s3.ap-south-1.amazonaws.com/1112893_Teamwork_Coworking_1920x1080_1_9d0e3b0d07+(1).mp4",
    },
    {
      title: "Product Photography &\nMedia Production",
      description: "We create pro visuals to showcase your brand online and on social media.",
      image: image2, 
      video: "https://squadra-media.s3.ap-south-1.amazonaws.com/7011693_Filmmaker_Cameraman_1920x1080_ee89e46b34.mp4",
    },
    {
      title: "Website Development &\nE-commerce Setup",
      description: "We design websites that look great and drive seamless user experiences for conversions.",
      image:"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/website.webp", 
      video: "https://squadra-media.s3.ap-south-1.amazonaws.com/1112819_Concentration_Teamwork_3840x2160_4065f959c6.mp4",
    },
        {
      title: "Digital Marketing Strategy",
      description: "We craft digital strategies to boost your presence, engage customers, and grow your brand.",
          image:"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/strategy.webp", 
      video: "https://squadra-media.s3.ap-south-1.amazonaws.com/1473075_People_Business_1920x1080_6675f77d8b.mp4",
    },
        {
      title: "Public Relations for Brand Launch",
      description: "We craft your message and deliver it to the right audience with targeted PR.",
          image:"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/relation.webp", 
      video: "https://squadra-media.s3.ap-south-1.amazonaws.com/1471741_People_Business_1920x1080_712aeda6f4.mp4",
    },
        {
      title: "Ongoing Marketing, Analytics &\n Scaling Your Business",
      description: "We drive engagement and sales while refining performance with data analytics.",
          image:"https://squadra-media.s3.ap-south-1.amazonaws.com/marketing.webp", 
      video: "https://squadra-media.s3.ap-south-1.amazonaws.com/1114499_Plan_Architecture_1920x1080_42270b2ae3.mp4",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16 mt-8">
      <div className="space-y-2 mb-8">
        <p className="sm:text-sm text-[11px] font-medium text-gray-600 uppercase tracking-wider">CUSTOMER JOURNEY</p>
        <h2 className="sm:text-3xl text-[24px] leading-8 md:text-4xl font-semibold">
          How <span className="text-[#FBAE17]">Squadra Media</span> Drives Your Growth.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
        <Card
        key={index}
        className="border-none shadow-none bg-gray-50 overflow-hidden transform transition-transform duration-500 ease-in-out hover:shadow-1.5xl"
        style={{ transform: "scale(1)", transition: "transform 0.5s ease-in-out" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >

            <div className="relative aspect-[3/2] group">
              {/* Video */}
              {/* <video
                className="w-full h-full object-cover opacity-0  group-hover:opacity-100 transition-opacity"
                autoPlay
                muted
                loop
                playsInline
                src={service.video}
              /> */}
              {/* Thumbnail Image */}
              <Image quality={30} priority
                src={service.image}
                alt={service.title}
                fill
                className="object-cover  transition-opacity"
                // group-hover:opacity-0
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-[16px] font-semibold leading-[19px] whitespace-pre-line mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-[19px]">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default CustomerJourneySection;
