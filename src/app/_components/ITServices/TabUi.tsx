'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import heroImage from '@/utilities/images/desktop-hero-image.svg'
import "./styles/TabletUI.css"
import Image from 'next/image';
import { aiAndDigital, cloudData, customSoftwareDevData, data, finTech, healthcare, ItServices, saasData, webAndMobDev } from './MobileUi';
import starSvg from '@/utilities/images/star.svg' 
import Container from '@/utilities/images/Container.svg'
import ITImage from '@/utilities/images/ITImage.svg'
import HealthCareMain from '@/utilities/images/healthCareMAin.svg'
import finTechMain from '@/utilities/images/fintechMain.svg';
import whyChooseImage from '@/utilities/images/whyChooseUsImageDesktop.svg'
import TabComponent from './TabletTab';
import ContactUsForm from './components/TabletContactUsForm';
import ApprochCompTab from './components/ApprochCompTab';



function TabUi() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current?.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setIsInView(inView);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-fit pt-16 flex flex-col mx-auto  w-full  items-center bg-black">
      {/* <p className='text-white'> jhghjgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhghfghfhgfghhjgkghjglh</p> */}

      {/* Intro Section */}
      <div className='w-full h-[1165px] mt-[145px] flex flex-col items-center mb-[0px]'>
        <div className='w-full h-[322px] flex flex-col gap-[16px] items-center mt-[80px]'>
          <p className="font-medium text-[72px] leading-[84px] text-center text-[#FFFFFF]">
            Your Trusted Partner <br />
            <span
              className=""
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              in IT Innovation
            </span>
          </p>
          <div className='w-[544px] h-[62px] flex items-center justify-center text-center'>
            <p className='font-normal text-[18px] leading-[31px] text-white'>Empowering businesses with cutting-edge technology, scalable solutions, and transformative digital strategies.</p>
          </div>

          <div className="w-[137px] h-[57px] rounded-[12px] border flex justify-center items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="w-[115px] h-[41px] py-[5px] px-[15px] gap-[8px] rounded-[8px] bg-[#FFFFFF] cursor-pointer">
              {/* Content goes here */}
              <p className="text-[15px] font-medium leading-[31px] text-center text-[#000000] text-nowrap">
                Connect Us
              </p>

            </div>
          </div>
        </div>

        <div className='mb-[43px]'>
          <div className='w-full h-[815.25px]'>
            <Image
              src={heroImage}
              ref={imageRef}
              alt="Hero Image"
              width={0}
              height={0}
              className={`image ${isInView ? 'expand' : ''}`}
            />
          </div>
        </div>

      </div>

      {/* Carousel */}
      {/*  add code here*/}

      {/* <div className='mb-[42px] flex flex-col items-center justify-center'>
        <div className="scrolling-container-tablet">
          <div className="scrolling-content">
            {logos?.map((logo, index) => (
              <div key={index} className="inline-block [176.4px] h-[58.8px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[176.4px] h-[58.8px]' />
              </div>
            ))}
            {logos?.map((logo, index) => (
              <div key={`duplicate-${index}`} className="inline-block [176.4px] h-[58.8px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[176.4px] h-[58.8px]' />
              </div>
            ))}
          </div>
        </div>


      </div> */}

      {/* Our Benefits */}
      <div className="w-[140.88px] h-[44px] flex justify-center items-center rounded-[100px] bg-[#131315]">
        <div className="flex items-center gap-[2px] h-full">
          <Image
            className="flex-shrink-0"
            src={starSvg}
            width={20}
            height={20}
            alt="Star"
          />
          <p className="text-white font-medium text-[16px] leading-[24px] text-center">
            Our Benefits
          </p>
        </div>
      </div>


      <p
        className="text-center mt-[13px] text-white text-[54px] font-bold leading-[65.35px]"

      >
        What we do
      </p>

      <div className="w-[597] h-[44px] gap-0 mt-[12px]">
        <p
          className="text-center text-[#797B85] text-[18px] font-medium leading-[21.96px]"
        >
          Empowering businesses with transformative IT solutions for efficiency <br /> and success
        </p>

      </div>

      <div className='w-[321px] h-[670px] mt-[42px]'>
        <Image
          src="https://squadra-media.s3.ap-south-1.amazonaws.com/mockup+.png"
          width={321}
          height={670}
          className='w-[321px] h-[670px] object-cover'
          alt='BenefitFrame'
        />
        {/* <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/e+video.mp4" autoPlay loop width="640" height="600" className='rounded-md h-[1000px]'></video> */}
      </div>

      {/* Feature Cards */}

      <div className='mt-[42px] grid grid-cols-2 gap-[20px]'>
        {
          data?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[200px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className='flex flex-col gap-[8px]'>
                <div className='w-[58px] h-[58px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={30}
                    height={30}
                    alt='Network'
                  />
                </div>
                <div className='w-[302px] h-[33px] flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[8px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      <div className='w-[727px] h-[113px] mt-[100px] mb-[72px] flex flex-col items-center justify-center'>
        <p
          className="text-left text-[20px] font-normal leading-[24px] text-[#888888] uppercase"

        >
          Delivering excellence.
        </p>
        <div className='w-[727px] h-[113px] mt-[16px]'>

          <p
            className="text-center text-[46px] font-medium leading-[54.89px] text-white"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Squadra delivers cutting-edge solutions for{" "}
            <span
              className="text-center text-[46px] font-medium leading-[54.89px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                WebkitBackgroundClip: 'text', // For Safari
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Business Success
            </span>


          </p>


        </div>
      </div>

      {/*  Custom Software Development */}
      <div className='bg-white w-full flex flex-col items-center justify-center pt-[48px]'>
        <div className='w-[714px] h-[55px] '>
          <p
            className="text-center text-[46px] text-[#222222] font-semibold leading-[54.9px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Custom Software{" "}
            <span
              className="text-[46px] text-[#94969D] font-semibold leading-[54.9px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
              }}
            >
              Development
            </span>
          </p>

        </div>
        <div className='w-[340px] h-[425px] mt-[48px]'>
          <Image
            src={Container}
            width={340}
            height={425}
            alt='Container'

          />
        </div>
        {/* Customer Software Development */}
        <div className='mt-[42px] mb-[48px] grid grid-cols-2 gap-[20px]'>
          {
            customSoftwareDevData?.map((el) => (

              <div key={el.title}
                className="w-[347px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[50px] h-[50px] flex items-center gap-[8px] justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={23}
                      height={23}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[18px] font-medium leading-[30px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[20px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>
        {/* Saas Development */}
        <div className='w-[714px] h-[55px] mt-[62px]'>
          <p
            className="text-center text-[46px] font-semibold leading-[54.89px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            SaaS{" "}
            <span
              className="text-[46px] font-medium leading-[54.89px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Development
            </span>
          </p>
          <p
            className="text-center mt-[8px] text-[18px] font-medium leading-[27px] text-[#797B85]"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Deliver scalable, cloud-first experiences.
          </p>


        </div>
        <div className='w-[540px] h-[550px] mt-[44px]'>
          {/* <Image
            src={SaasMain}
            width={540}
            height={388}
            alt='SaaS'
          /> */}
          <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/Dashboard+video.mp4" autoPlay loop width="640" height="360" className='rounded-md'></video>
        </div>
        <div className='mt-[44px] mb-[48px] grid grid-cols-2 gap-[20px]'>
          {
            saasData?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={23}
                      height={23}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[18px] font-medium leading-[21.47px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[16.71px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>
      </div>

      {/* End-to-End
IT Services */}
      <div className='w-[714px] h-[58px] mt-[72px] flex justify-center'>
        <p
          className="flex  text-center text-[#FFFFFF] text-[46px] font-bold leading-[57.6px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          End-to-End{' '}&nbsp;
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            IT Services
          </span>
        </p>

      </div>
      <div className='w-[342px] h-[427px] mt-[42px]'>
        <Image
          src={ITImage}
          width={342}
          height={427}
          alt='It SErvices'
        />
      </div>
      <div className='mt-[42px] grid grid-cols-2 gap-[20px]'>
        {
          ItServices?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={23}
                    height={23}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[18px] font-medium leading-[30px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[16px] font-medium leading-[19px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* Web & Mobile App
Development */}
      <div className='w-[714px] h-[110px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[46px] font-medium leading-[54.89px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Web & Mobile Application
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Development
          </span>
        </p>

      </div>
      <div className='w-[342px] h-[600px] mt-[42px]'>
        {/* <Image
          src={webandMobileMain}
          width={342}
          height={398}
          alt='webandMobileMain'
        /> */}
        <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4" autoPlay loop width="640" height="360" className='rounded-md'></video>
      </div>
      <div className='mt-[42px] mb-[32px] grid grid-cols-2 gap-[20px]'>
        {
          webAndMobDev?.map((el) => (

            <div key={el.title}
              className="w-[298px] mt-[16px] bg-[#19191C] h-[148px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={23}
                    height={23}
                    alt='Network'
                  />

                </div>
                <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[16px] font-medium leading-[19.09px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[266px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/*  Health Care*/}
      <div className='bg-white w-full flex flex-col items-center justify-center pt-[48px]'>
        <div className='w-[714px] h-[58px] '>
          <p
            className="text-center text-[46px] text-[#222222] font-semibold leading-[57.6px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Healthcare{" "}
            <span
              className="text-[46px] text-[#94969D] font-semibold leading-[57.6px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
              }}
            >
              Applications
            </span>
          </p>

        </div>
        <div className='w-[342px] h-[427px] mt-[48px]'>
          <Image
            src={HealthCareMain}
            width={342}
            height={427}
            alt='HealthCareMain'

          />
        </div>
        {/* Ai */}
        <div className='mt-[42px] mb-[48px] grid grid-cols-2 gap-[20px]'>
          {
            healthcare?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={23}
                      height={23}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[18px] font-medium leading-[30px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[16px] font-medium leading-[19px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>
        <div className='w-[714px] h-[110px] mt-[72px]'>
          <p
            className="text-center text-[46px] font-semibold leading-[54.89px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Automation & Digital {" "}
            <span
              className="text-[46px] font-medium leading-[54.89px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
                background: 'linear-gradient(96.49deg, #EE5EFF 24%, #635BFF 53.5%, #38CBFF 85.5%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Transformation
            </span>
          </p>



        </div>
        <div className='w-[342px] h-[427px] mt-[44px]'>
          {/* <Image
            src={aiMain}
            width={342}
            height={427}
            alt='SaaS'
          /> */}
          <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video3d.mp4" autoPlay={true} loop width="640" height="360" className='rounded-[24px]'></video>
        </div>
        <div className='mt-[44px] mb-[48px] grid grid-cols-2 gap-[20px]'>
          {
            aiAndDigital?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
              >
                <div className='flex gap-[8px]'>
                  <div className='w-[44px] h-[44px] flex items-center justify-center border-[1px] border-gray-300 rounded-[10.62px]'>
                    <Image
                      src={el?.icon}
                      width={23}
                      height={23}
                      alt='Network'
                    />
                  </div>
                  <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                    <p
                      className="text-[#222222] text-start  text-[18px] font-medium leading-[22px]"

                    >
                      {el?.title}
                    </p>
                  </div>
                </div>
                <div className='w-[303px] h-[40px] mt-[12px]'>
                  <p
                    className="text-left text-[14px] font-medium leading-[20px] text-[#717171]"

                  >
                    {el?.description}
                  </p>

                </div>
              </div>
            ))}
        </div>


      </div>

      {/* End-to-End
IT Services */}
      <div className='w-[750px] h-[58px] mt-[72px] flex justify-center'>
        <p
          className="flex text-center text-[#FFFFFF] text-[46px] font-medium leading-[57px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          FinTech&nbsp;
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Applications
          </span>
        </p>

      </div>
      <div className='w-[342px] h-[427px] mt-[42px]'>
        <Image
          src={finTechMain}
          width={342}
          height={427}
          alt='It SErvices'
        />
      </div>
      <div className='mt-[42px] grid grid-cols-2 gap-[20px]'>
        {
          finTech?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={23}
                    height={23}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[18px] font-medium leading-[20px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[16px] font-medium leading-[19px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* Cloud */}
      <div className='w-[335px] h-[76px] mt-[72px] flex items-center justify-center'>
        <p
          className="flex  text-center text-[#FFFFFF] text-[46px] font-medium leading-[57.6px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Cloud&nbsp;
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE5EFF] via-[#635BFF] to-[#38CBFF]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Solutions
          </span>
        </p>

      </div>
      <div className='w-[342px] h-[600px] mt-[42px]'>
        {/* <Image className='object-cover'
          src={cloudMain} unoptimized={true}
          width={342} quality={80}
          height={427} priority
          alt='webandMobileMain'
        /> */}
        <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4" autoPlay loop width="640" height="360"  className='rounded-[24px]'></video>
      </div>
      <div className='mt-[42px] mb-[32px] grid grid-cols-2 gap-[20px]'>
        {
          cloudData?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[147px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
            >
              <div className='flex gap-[8px]'>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-[#18181A] border-[2px] border-[#28282C] rounded-[10.62px]'>
                  <Image
                    src={el?.icon}
                    width={23}
                    height={23}
                    alt='Network'
                  />
                </div>
                <div className='w-[237px] h-[38px]  flex items-center justify-left'>
                  <p
                    className="text-white text-start  text-[24px] font-medium leading-[20px]"

                  >
                    {el?.title}
                  </p>
                </div>
              </div>
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[16px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* solutions */}
      <div className='w-full h-[860px] bg-white flex items-center'>
      <ApprochCompTab/>
      </div>

      {/*    sQuadra tech Team */}
      <div className='w-full py-[72px] px-[124px] flex flex-col gap-[62px] bg-[#FAFAFA] items-center'>
        <div className='flex flex-col gap-[12px] items-center justify-center w-[668px] h-[132px]'>
          <p className="font-semibold text-[40px] leading-[47px] text-center text-[#FBAE17]">
            Squadra <span className="font-semibold text-[40px] leading-[47px] text-center text-[#131313]">Tech Team</span>
          </p>
          <p className="font-normal text-[18px] leading-[21.50px] text-center text-[#888888]">
            A space to unlock your true potential, chase your dreams, and embrace your passion all while enjoying every moment with fun and laughter!
          </p>
        </div>
        <div className='flex gap-[12px] items-center'>
          <div className='flex flex-col gap-[12px]'>
            <div className='w-[351px] h-[268.5px] bg-gray-200'>
              <Image
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/7.jpg"}
                alt='Tech Team'
                width={351}
                height={268.5}
                className='object-cover h-[268.5px] w-[351px]'
              />
            </div>
            <div className='flex items-center gap-[12px]'>
              <div className='w-[169.5px] h-[268.5px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/444.png"}
                  alt='Tech Team'
                  width={169.5}
                height={268.5}
                className='object-cover h-[268.5px] w-[169.5px]'
                />
              </div>
              <div className='w-[169.5px] h-[268.5px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/5.jpg"}
                  alt='Tech Team'
                  width={169.5}
                height={268.5}
                className='object-cover h-[268.5px] w-[169.5px]'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[12px]'>
            <div className='flex items-center gap-[12px]'>
              <div className='w-[169.5px] h-[268.5px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/DSC_8330.jpg"}
                  alt='Tech Team'
                  width={169.5}
                height={268.5}
                className='object-cover h-[268.5px] w-[169.5px]'
                />
              </div>
              <div className='w-[169.5px] h-[268.5px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg"}
                  alt='Tech Team'
                  width={169.5}
                height={268.5}
                className='object-cover h-[268.5px] w-[169.5px]'
                />
              </div>
            </div>
            <div className='w-[351px] h-[268.5px] bg-gray-200'>
              <Image
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/6.jpg"}
                alt='Tech Team'
                width={351}
                height={268.5}
                className='object-cover h-[268.5px] w-[351px]'
              />
            </div>

          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className='w-full flex items-center bg-white pt-[124px]'>


        <div className='bg-white min-w-[714px] mx-auto h-[516px] flex items-center justify-center flex-col'>


          <div className='flex flex-col gap-[12px] w-[662px] h-[128px] mb-[60px] '>
            <p className="font-sans text-[40px] font-semibold leading-[47.73px] text-center text-[#000000]">
              Why Choose <span className="font-sans text-[40px] font-semibold leading-[47.73px] text-center text-[#FBAE17]">Us</span>
            </p>
            <div className="flex items-center justify-center h-full">
              <p className='font-normal text-[16px] leading-[20.8px] text-[#000000] text-center'>
                We understand your needs and deliver impactful solutions with expertise, dedication, and a proven track record.
              </p>
            </div>
          </div>

          <div className='relative w-[714px] flex items-center justify-center' style={{ height: '280px' }}>
            <Image
              src={whyChooseImage}
              width={0}
              height={0}
              className='absolute z-10 top-0'
              alt='Network'
            />
          </div>
        </div>
      </div>

      {/* technologies we use */}
      <div className='w-full'>
        <div className='min-w-[714px] mx-auto h-fit bg-[#FAFAFA] pt-[100px]'>
          <div className='w-full h-[120px] flex flex-col  items-center justify-center text-center mb-[70px]'>
            <div className='w-[664px] h-[76px] '>
              <p
                className="text-[40px] text-[#222222] font-semibold leading-[57.6px]"
                style={{
                  fontFamily: 'SF UI Display, sans-serif',
                  textDecorationSkipInk: 'none',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Technologies {" "}
                <span
                  className="text-[40px] text-[#94969D] font-semibold leading-[57.6px]"
                  style={{
                    fontFamily: 'SF UI Display, sans-serif',
                    textDecorationSkipInk: 'none',
                    textUnderlinePosition: 'from-font',
                  }}
                >
                  we use
                </span>
              </p>
              <p className="text-[14px] mt-[24px] font-normal leading-[16.7px] text-center text-[#4E4D4D]">Discover the cutting-edge technologies we use to deliver innovative and impactful solutions, from modern frameworks to advanced cloud and machine learning tools</p>
            </div>
          </div>
          <TabComponent />

        </div> 
      </div>

      {/* Contact us */}
            <ContactUsForm />

    </div>
  )
}

export default TabUi
