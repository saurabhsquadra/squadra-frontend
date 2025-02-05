'use client'
import React from "react";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";
import teamMeetIcon from "@/utilities/icons/team-meet.svg";
import Link from "next/link";


function PeoplesWoGetsThingsDone() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-0 flex items-center xl:justify-between lg:justify-center mb-8 mt-4 md:mt-0 md:mb-12">
        <h1 className="text-[24px] font-medium px-4 sm:px-0 sm:text-4xl md:text-4xl md:text-[40px] md:text-center md:max-w-full xl:text-4xl xl:max-w-[570px] lg:max-w-[570px]">
          Empowering <strong className="text-[#FBAE17] font-[600]">Brands</strong> with Media, Tech and Animation.
        </h1>
        <div className="hidden xl:block">
          <Link href="/about-us" className="h-[56px] w-[173px] rounded-[42px] border py-4 px-5 gap-[4px] flex justify-center items-center bg-[#FFFFFF] border-[#E7E7E7] cursor-pointer">
            <p className="font-semibold text-[16px] leading-[19.09px] text-[#131313]">Meet our team</p>
            <Image priority src={teamMeetIcon} alt="arrow" width={12} height={10} />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-0">
        <div className="flex items-center sm:gap-7 gap-4 xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col">
          <div className="xl:w-[452px] xl:h-[518px] lg:w-[714px] lg:h-[818px] md:w-[714px] md:h-[818px] sm:w-[335px] sm:h-[383.92px] w-[335px] h-[383.92px]">
            <Carousel />
          </div>

          <div className="xl:w-fit lg:w-[714px] md:w-[714px] sm:w-[335px] w-[335px] flex flex-col gap-6">
            <div className="w-full xl:h-[363px] lg:h-[363px] md:h-[363px] rounded-[24px]">
              <Image priority
                objectFit="cover" unoptimized blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4WAoAAAAQAAAABwAIAQUxQSAwAWAAQUAA0JaQAA3AA/v+/gAA=" quality={100} src={"https://squadra-media.s3.ap-south-1.amazonaws.com/DSC_3720+2+(1).webp"} width={711} height={363} alt="team image" className="w-full h-[363px] aspect-square rounded-[24px] object-cover" />
            </div>
            <div className="flex items-center justify-center xl:gap-6 lg:gap-6 md:gap-6 sm:gap-3 gap-3 xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
              <div className="flex items-center justify-center xl:gap-6  lg:gap-6 md:gap-6 sm:gap-3 gap-3">
                <div className="xl:w-[221px] xl:h-[130px] lg:w-[221px] lg:h-[130px] md:w-[221px] md:h-[130px] sm:w-[162px] sm:h-[64px] w-[162px] h-[64px] flex flex-col justify-center items-center xl:rounded-[24px] lg:rounded-[24px] md:rounded-[24px] sm:rounded-[11px] rounded-[11px] border border-[#E7E7E7] bg-[#F8F8F8] xl:p-6 lg:p-6 md:p-6 sm:p-[11.26px] p-[11.26px]">
                  <p ref={ref} className="font-medium xl:text-[52px] xl:leading-[62.05px] lg:text-[52px] lg:leading-[62.05px] md:text-[52px] md:leading-[62.05px] sm:text-[24px] sm:leading-[28.64px] text-[24px] leading-[28.64px] text-[#FBAE17]">{inView ? <CountUp end={4} duration={3} /> : 4}+</p>
                  <p className="font-normal xl:text-[18px] xl:leading-[32px] lg:text-[18px] lg:leading-[32px] md:text-[18px] md:leading-[32px] sm:text-[13px] sm:leading-[15px] text-[13px] leading-[15px] text-[#6D6D6D]">Years of Experience</p>
                </div>
                <div className="xl:w-[221px] xl:h-[130px] lg:w-[221px] lg:h-[130px] md:w-[221px] md:h-[130px] sm:w-[162px] sm:h-[64px] w-[162px] h-[64px] flex flex-col justify-center items-center xl:rounded-[24px] lg:rounded-[24px] md:rounded-[24px] sm:rounded-[11px] rounded-[11px] border border-[#E7E7E7] bg-[#F8F8F8] xl:p-6 lg:p-6 md:p-6 sm:p-[11.26px] p-[11.26px]">
                  <p ref={ref} className="font-medium xl:text-[52px] xl:leading-[62.05px] lg:text-[52px] lg:leading-[62.05px] md:text-[52px] md:leading-[62.05px] sm:text-[24px] sm:leading-[28.64px] text-[24px] leading-[28.64px] text-[#FBAE17]">{inView ? <CountUp end={150} duration={3} /> : 150}+</p>
                  <p className="font-normal xl:text-[18px] xl:leading-[32px] lg:text-[18px] lg:leading-[32px] md:text-[18px] md:leading-[32px] sm:text-[13px] sm:leading-[15px] text-[13px] leading-[15px] text-[#6D6D6D]">Campaigns</p>
                </div>
              </div>
              <div className="xl:w-[221px] xl:h-[130px] lg:w-[221px] lg:h-[130px] md:w-[221px] md:h-[130px] sm:w-[162px] sm:h-[64px] w-[162px] h-[64px] flex flex-col justify-center items-center xl:rounded-[24px] lg:rounded-[24px] md:rounded-[24px] sm:rounded-[11px] rounded-[11px] border border-[#E7E7E7] bg-[#F8F8F8] xl:p-6 lg:p-6 md:p-6 sm:p-[11.26px] p-[11.26px]">
                  <p ref={ref} className="font-medium xl:text-[52px] xl:leading-[62.05px] lg:text-[52px] lg:leading-[62.05px] md:text-[52px] md:leading-[62.05px] sm:text-[24px] sm:leading-[28.64px] text-[24px] leading-[28.64px] text-[#FBAE17]">{inView ? <CountUp end={100} duration={3} /> : 100}+</p>
                  <p className="font-normal xl:text-[18px] xl:leading-[32px] lg:text-[18px] lg:leading-[32px] md:text-[18px] md:leading-[32px] sm:text-[13px] sm:leading-[15px] text-[13px] leading-[15px] text-[#6D6D6D]">Experts</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default PeoplesWoGetsThingsDone

