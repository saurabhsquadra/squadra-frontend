"use client";
import React from 'react'; 
import { useState,useRef,useEffect } from 'react';
import starSvg from '@/utilities/images/star.svg'
import "./styles/MobileUI.css"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import sliderIcon from "@/utilities/icons/slider-icon.svg"
import Image from 'next/image';
import Network from '@/utilities/images/Network.svg'
import Saas from '@/utilities/images/Saas.svg'
import Solution from '@/utilities/images/Solution.svg'
import Connection from '@/utilities/images/Connection.svg' 
import UserWorkFlow from '@/utilities/images/User workflow.svg'
import codeSquare from '@/utilities/images/Code Square.svg'
import Container from '@/utilities/images/Container.svg'
import netWorkBlack from '@/utilities/images/NetworkBlack.svg'
import HandShake from '@/utilities/images/Handshake.svg'
import Archive from '@/utilities/images/Archive.svg'
import Book from '@/utilities/images/Book.svg'
import DB from '@/utilities/images/db.svg'
import CloudConnection from '@/utilities/images/cloud connection.svg'
import Graphs from '@/utilities/images/Graphs.svg'
import CustomServices from '@/utilities/images/CustomSerivces.svg'
import ITImage from '@/utilities/images/ITImage.svg'
import uiux from '@/utilities/images/uiux.svg'
import devops from '@/utilities/images/devops.svg'
import cybersecurity from '@/utilities/images/cybersecurity.svg'
import qa from '@/utilities/images/qa.svg'
import progressiveWebapp from '@/utilities/images/progressivewebapp.svg'
import customwebSites from '@/utilities/images/websites.svg'
import crossPlatforms from '@/utilities/images/crossplatforms.svg';
import apiDevelopment from '@/utilities/images/apiDevelopment.svg';
import webandMobileMain from '@/utilities/images/webandMobileMain.svg'
import teleMedicine from '@/utilities/images/telemedicine.svg';
import wellness from '@/utilities/images/wellness.svg';
import patientManagement from '@/utilities/images/patientmanagement.svg';
import healthRecords from '@/utilities/images/healthrecords.svg';
import HealthCareMain from '@/utilities/images/healthCareMAin.svg'
import aiDrivenProcess from '@/utilities/images/sparkles.svg';
import workflow from '@/utilities/images/workflow.svg';
import digitaltransformation from '@/utilities/images/digitaltransformation.svg';
import cloud from '@/utilities/images/cloud.svg';
import secure from '@/utilities/images/secure.svg';
import financial from '@/utilities/images/financial.svg';
import wallet from '@/utilities/images/wallet.svg';
import invoice from '@/utilities/images/invoice.svg';
import finTechMain from '@/utilities/images/fintechMain.svg';
import cloudsolution from '@/utilities/images/cloudsolution.svg';
import architecturedesign from '@/utilities/images/architecturedesign.svg';
import clouddev from '@/utilities/images/clouddev.svg';
import cloudsecurity from '@/utilities/images/cloudsecurity.svg';

import whyChooseUsImage from '@/utilities/images/why-choose-us.svg'
import dottedLine from '@/utilities/images/dotted-line.svg'
import heroImage from '@/utilities/images/hero-image.svg'
import ContactUsForm from './components/ContactUsForm';
import { analyticsTools, backendTools, devopsTools, frontendTools, mobileTools } from './Tabs';
import ApproachComponent from './components/ApproachComponent';
import Link from 'next/link';

export const data = [
  { icon: Network, title: "Custom Software Development", description: "Bespoke software solutions tailored to your business needs." },
  { icon: Solution, title: "Data & AI Solutions", description: "Leveraging data and AI to drive smarter decisions and automation." },
  { icon: codeSquare, title: "Web & Mobile Application Development", description: "Creating fast, intuitive web and mobile apps." },
  { icon: Saas, title: "SaaS Development", description: "Scalable, cloud-based applications for subscription-based services." },
  { icon: UserWorkFlow, title: "End-to-End IT Services", description: "Complete IT support from design to deployment and security." },
  { icon: Connection, title: "Industry-Specific Solutions", description: "Customised solutions for finance, healthcare, and other industries." },
]

export const customSoftwareDevData = [
  {
    icon: netWorkBlack, title: "ERP Systems", description: "Chat seamlessly with friends and communities."
  },
  {
    icon: HandShake, title: "CRM Platforms", description: "Share life moments through photos and videos."
  },
  {
    icon: Archive, title: "Inventory Management", description: "Personalize your profile with themes and layouts."
  },
  {
    icon: Book, title: "LMS Platforms", description: "Join or create groups around shared interests."
  },
]

export const saasData = [
  {
    icon: DB, title: "Subscription Management Solutions", description: "Streamline subscriptions with efficient tools for tracking, billing, and renewals."
  },
  {
    icon: CloudConnection, title: "Cloud-Based Applications", description: "Leverage scalable, secure, and accessible solutions powered by the cloud."
  },
  {
    icon: Graphs, title: "Data-Driven SaaS Tools", description: "Personalise your profile with themes and layouts."
  },
  {
    icon: CustomServices, title: "Custom Integration Services", description: "Connect systems to streamline workflows and improve data sharing."
  },
]

export const ItServices = [
  {
    "icon": uiux,
    "title": "UI/UX Design",
    "description": "Seamless interfaces for intuitive experiences."
  },
  {
    "icon": devops,
    "title": "DevOps",
    "description": "Streamlined processes for smooth deployments."
  },
  {
    "icon": cybersecurity,
    "title": "Cybersecurity",
    "description": "Safeguarding your assets through advanced protection."
  },
  {
    "icon": qa,
    "title": "QA & Automation",
    "description": "Ensuring flawless performance through rigorous testing."
  }
]

export const webAndMobDev = [
  {
    "icon": progressiveWebapp,
    "title": "Progressive Web Apps",
    "description": "Delivering speed and reliability for seamless user experiences."
  },
  {
    "icon": customwebSites,
    "title": "Custom Websites",
    "description": "Tailored designs that reflect your brand's identity."
  },
  {
    "icon": crossPlatforms,
    "title": "Cross-Platform Mobile Apps",
    "description": "Expanding your reach to more users across devices."
  },
  {
    "icon": apiDevelopment,
    "title": "API Development",
    "description": "Building robust and scalable APIs for seamless integration across platforms."
  }
]


export const healthcare = [
  {
    "icon": teleMedicine,
    "title": "Telemedicine Platforms",
    "description": "Streamline healthcare workflows for better patient care."
  },
  {
    "icon": wellness,
    "title": "Wellness and Fitness Apps",
    "description": "Promote healthy living with personalized fitness solutions."
  },
  {
    "icon": patientManagement,
    "title": "Patient Management Systems",
    "description": "Streamline healthcare workflows for efficiency and better care."
  },
  {
    "icon": healthRecords,
    "title": "Electronic Health Records",
    "description": "Digitize patient info for seamless access and better care."
  }
]

export const aiAndDigital = [
  {
    "icon": aiDrivenProcess,
    "title": "AI-Driven Process Automation",
    "description": "Automate tasks with AI to boost efficiency and reduce human error."
  },
  {
    "icon": workflow,
    "title": "Workflow Optimization Tools",
    "description": "Streamline processes and improve team collaboration for higher productivity."
  },
  {
    "icon": digitaltransformation,
    "title": "Complete Digital Transformation Strategies",
    "description": "Implement digital solutions to drive growth and innovation across your business."
  },
  {
    "icon": cloud,
    "title": "Cloud Integration Solutions",
    "description": "Integrate cloud technologies for enhanced scalability and operational flexibility."
  }
]

export const finTech = [
  {
    "icon": secure,
    "title": "AI-Driven Process Automation",
    "description": "Automate tasks with AI to boost efficiency and reduce human error."
  },
  {
    "icon": financial,
    "title": "Workflow Optimization Tools",
    "description": "Streamline processes and improve team collaboration for higher productivity."
  },
  {
    "icon": wallet,
    "title": "Complete Digital Transformation Strategies",
    "description": "Implement digital solutions to drive growth and innovation across your business."
  },
  {
    "icon": invoice,
    "title": "Cloud Integration Solutions",
    "description": "Integrate cloud technologies for enhanced scalability and operational flexibility."
  }
]

export const cloudData = [
  {
    "icon": cloudsolution,
    "title": "Cloud Solutions",
    "description": "Provide scalable, flexible cloud services to meet business needs."
  },
  {
    "icon": architecturedesign,
    "title": "Architecture Design",
    "description": "Design scalable cloud infrastructures for optimal performance."
  },
  {
    "icon": clouddev,
    "title": "Cloud Dev",
    "description": "Develop cloud-native applications with agility and innovation."
  },
  {
    "icon": cloudsecurity,
    "title": "Cloud Security",
    "description": "Ensure robust protection for data and applications in the cloud."
  }
]



export const logos = [
  { name: "VIDA", url: sliderIcon },
  { name: "Brand 8", url: sliderIcon },
  { name: "E-ZONE", url: sliderIcon },
  { name: "Brand 3", url: sliderIcon },
  { name: "GREE", url: sliderIcon },
  { name: "Habitat India", url: sliderIcon },
  { name: "Double Tree", url: sliderIcon },
  { name: "Brand 10", url: sliderIcon },
  { name: "Cafe Noir", url: sliderIcon },
  { name: "Brand 9", url: sliderIcon },
  { name: "Brand 11", url: sliderIcon },
  { name: "Brand 12", url: sliderIcon },
  { name: "Brand 13", url: sliderIcon },
  { name: "Brand 14", url: sliderIcon },
  { name: "Brand 15", url: sliderIcon },
];



function MobileUi() {

  const imageRef = useRef<HTMLImageElement | null>(null);
    const [isInView, setIsInView] = useState(false);

  console.log(imageRef)

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
    <div className="h-fit pt-32 flex flex-col  w-full  items-center bg-black">
      {/* Intro Section */}
      <div className='w-[375px] h-[830px] flex flex-col items-center'>
        <div className='mt-[145px] w-[327px] h-[174px] border-1 flex flex-col'>
          <p className="font-medium text-[31px] leading-[42.96px] text-center text-[#FFFFFF]">
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
          <div className='w-[311px] h=[72px] flex items-center justify-center text-center mt-[16px]'>
            <p className='font-[16px] text-white'>Empowering businesses with cutting-edge technology, scalable solutions, and transformative digital strategies.</p>
          </div>
        </div>

        <Link href='#contact-section' className="w-[135px] h-[61px] rounded-[12px] border p-[10px] mt-[34px] flex justify-center items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="w-[115px] h-[41px] p-[5px] px-[15px] gap-[8px] rounded-[8px] border bg-[#FFFFFF]">
            {/* Content goes here */}
            <p className="text-[15px] font-medium leading-[31px] text-center text-[#000000] text-nowrap">
              Connect Us
            </p>

          </div>
        </Link>

        <div className='mb-[43px]'>
          <div className='w-full h-[263px]'>
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

      {/* <div className='mb-[42px] flex flex-col items-center justify-center'>
        <div className="scrolling-container">
          <div className="scrolling-content">
            {logos?.map((logo, index) => (
              <div key={index} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[82.24px] h-[18.04px]' />
              </div>
            ))}
            {logos?.map((logo, index) => (
              <div key={`duplicate-${index}`} className="inline-block w-[92px] h-[52px] rounded-[5.31px] py-[16.98px] px-[5.31px] flex items-center justify-center border border-gray-900">
                <Image src={logo?.url?.src} alt={logo?.name} width={0} height={0} className='w-[82.24px] h-[18.04px]' />
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
        className="text-center mt-[13px] text-white text-[32px] font-bold leading-[38.19px]"

      >
        What we do
      </p>

      <div className="w-[335px] h-[34px] gap-0 mt-[12px]">
        <p
          className="text-center text-[#797B85] text-[14px] font-medium leading-[17.08px]"
        >
          Empowering businesses with transformative IT solutions for efficiency and success
        </p>

      </div>

      <div className='w-[321px] h-[670px] mt-[42px]'>
        <Image
          src="https://squadra-media.s3.ap-south-1.amazonaws.com/mockup+.png"
          width={321}
          height={600}
          alt='BenefitFrame'
        />
      </div>

      {/* Feature Cards */}

      <div className='mt-[42px]'>
        {
          data?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      <div className='w-[335px] h-[124px] mt-[42px] mb-[72px] flex flex-col items-center justify-center'>
        <p
          className="text-left text-[14px] font-normal leading-[24px] text-[#888888] uppercase"

        >
          Delivering excellence.
        </p>
        <div className='w-[295px] h-[92px] mt-[8px]'>

          <p
            className="text-center text-[24px] font-medium leading-[28.64px] text-white"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Squadra delivers cutting-edge solutions for{" "}
            <span
              className="text-center text-[28px] font-medium leading-[33.41px]"
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
        <div className='w-[335px] h-[76px] '>
          <p
            className="text-center text-[32px] text-[#222222] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Custom Software{" "}
            <span
              className="text-[32px] text-[#94969D] font-semibold leading-[38.19px]"
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
        <div className='mt-[42px] mb-[48px]'>
          {
            customSoftwareDevData?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"

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
        <div className='w-[335px] h-[63px]'>
          <p
            className="text-center text-[32px] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            SaaS{" "}
            <span
              className="text-[32px] font-medium leading-[38.19px]"
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
            className="text-center mt-[8px] text-[14px] font-medium leading-[17.08px] text-[#797B85]"
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Deliver scalable, cloud-first experiences.
          </p>


        </div>
        <div className='w-[342px] h-[330px] mt-[44px]'>
          {/* <Image
            src={SaasMain}
            width={342}
            height={275}
            alt='SaaS'
          /> */}
           <video autoPlay playsInline loop width="342" height="275" className='rounded-md'>
           <source src="https://squadra-media.s3.ap-south-1.amazonaws.com/Dashboard+video.mp4" type="video/mp4"/>
           </video>
        </div>
        <div className='mt-[44px] mb-[48px]'>
          {
            saasData?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"

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
      <div className='w-[335px] h-[76px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          End-to-End{' '}
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
      <div className='mt-[42px]'>
        {
          ItServices?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* Web & Mobile App
Development */}
      <div className='w-[335px] h-[76px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Web & Mobile App
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
      <div className='w-[342px] h-[398px] mt-[42px]'>
        <Image
          src={webandMobileMain}
          width={342}
          height={398}
          alt='webandMobileMain'
        />
      </div>
      <div className='mt-[42px] mb-[32px]'>
        {
          webAndMobDev?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
              <div className='w-[303px] h-[40px] mt-[12px]'>
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
        <div className='w-[335px] h-[76px] '>
          <p
            className="text-center text-[32px] text-[#222222] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Healthcare{" "}
            <span
              className="text-[32px] text-[#94969D] font-semibold leading-[38.19px]"
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
        <div className='mt-[42px] mb-[48px]'>
          {
            healthcare?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"

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
        <div className='w-[335px] h-[63px] mt-[72px]'>
          <p
            className="text-center text-[32px] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Automation & Digital {" "}
            <span
              className="text-[32px] font-medium leading-[38.19px]"
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
        <div className='w-[342px] h-[400px] mt-[44px]'>
          {/* <Image
            src={aiMain}
            width={342}
            height={427}
            alt='SaaS'
          /> */}
           <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video3d.mp4" autoPlay playsInline loop width="342" height="400" className='rounded-[24px]'></video>
        </div>
        <div className='mt-[44px] mb-[48px]'>
          {
            aiAndDigital?.map((el) => (

              <div key={el.title}
                className="w-[335px] mt-[16px] bg-[#F2F2F2] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
                      className="text-[#222222] text-start  text-[16px] font-medium leading-[19.09px]"

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
      <div className='w-[335px] h-[76px] mt-[72px]'>
        <p
          className="flex flex-col text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
          style={{
            fontFamily: 'SF UI Display, sans-serif',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          FinTech
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
      <div className='mt-[42px]'>
        {
          finTech?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

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
          className="flex  text-center text-[#FFFFFF] text-[32px] font-medium leading-[38.19px]"
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
          src={"https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4"} unoptimized={true}
          width={342} quality={80}
          height={427} priority
          alt='webandMobileMain'
        /> */}
         <video src="https://squadra-media.s3.ap-south-1.amazonaws.com/video+sample.mp4" autoPlay playsInline loop width="342" height="427" className='rounded-[24px]'></video>
      </div>
      <div className='mt-[42px] mb-[32px]'>
        {
          cloudData?.map((el) => (

            <div key={el.title}
              className="w-[335px] mt-[16px] bg-[#19191C] h-[128px] p-[16px] gap-[8px] rounded-[16px]   border-t-[1px] border-transparent"
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
              <div className='w-[303px] h-[40px] mt-[12px]'>
                <p
                  className="text-left text-[14px] font-medium leading-[20px] text-[#94969D]"

                >
                  {el?.description}
                </p>

              </div>
            </div>
          ))}
      </div>

      {/* solutions */}
      <div className='w-full bg-white flex items-center'>
      <ApproachComponent/>
      </div>

      {/*    sQuadra tech Team */}
      <div className='pt-[44px] pb-[40px] px-[20px] flex flex-col gap-[24px] bg-[#F7F7F7]'>
        <div className='flex flex-col gap-[12px] items-center justify-center'>
          <p className="font-semibold text-[32px] leading-[38.19px] text-center text-[#FBAE17]">
            Squadra <span className="font-semibold text-[32px] leading-[38.19px] text-center text-[#131313]">Tech Team</span>
          </p>
          <p className="font-normal text-[14px] leading-[16.71px] text-center text-[#888888]">
            Discover a workplace where creativity thrives, teamwork shines, and careers take flight.
          </p>
        </div>
        <div className='flex flex-col gap-[12px] items-center'>
          <div className='flex flex-col gap-[12px]'>
            <div className='w-[335px] h-[194px] bg-gray-200'>
              <Image
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/7.jpg"}
                alt='Tech Team'
                width={335}
                height={194}
                className='object-cover h-[194px] w-[335px]'
              />
            </div>
            <div className='flex items-center gap-[12px]'>
              <div className='w-[161.5px] h-[194px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/444.png"}
                  alt='Tech Team'
                  width={161.5}
                  height={194}
                  className='object-cover h-[194px] w-[161.5px]'
                />
              </div>
              <div className='w-[161.5px] h-[194px] bg-gray-200'>
                <Image
                   src={"https://squadra-media.s3.ap-south-1.amazonaws.com/5.jpg"}
                  alt='Tech Team'
                  width={161.5}
                  height={194}
                  className='object-cover h-[194px] w-[161.5px]'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <div className='w-[335px] h-[194px] bg-gray-200'>
              <Image
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/6.jpg"}
                alt='Tech Team'
                width={335}
                height={194}
                className='object-cover h-[194px] w-[335px]'
              />
            </div>
            <div className='flex items-center gap-[12px]'>
              <div className='w-[161.5px] h-[194px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/DSC_8330.jpg"}
                  alt='Tech Team'
                  width={161.5}
                  height={194}
                  className='object-cover h-[194px] w-[161.5px]'
                />
              </div>
              <div className='w-[161.5px] h-[194px] bg-gray-200'>
                <Image
                  src={"https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg"}
                  alt='Tech Team'
                  width={161.5}
                  height={194}
                  className='object-cover h-[194px] w-[161.5px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us*/}
      <div className='bg-white w-full flex items-center justify-center flex-col'>


        <div className='mt-[72px] flex flex-col gap-[12px] w-[335px] h-[101px] mb-[40px] '>
          <p className="font-sans text-[32px] font-semibold leading-[38.19px] text-center text-[#131313]">
            Why Choose <span className="font-sans text-[32px] font-semibold leading-[38.19px] text-center text-[#FBAE17]">Us</span>
          </p>
          <div className="flex items-center justify-center h-full">
            <p className='font-normal text-[14px] leading-[16.71px] text-[#6D6D6D] text-center'>
              We understand your needs and deliver impactful solutions with expertise, dedication, and a proven track record.
            </p>
          </div>
        </div>

        <div className='relative w-full' style={{ height: '800px' }}>
          <Image
            src={whyChooseUsImage}
            width={335}
            height={731}
            className='absolute z-10 top-0 left-[22px]'
            alt='Network'
          />
          <Image
            src={dottedLine}
            width={335}
            height={0}
            className='absolute h-[700px] z-0 top-[50px] left-[22px]'
            alt='Network'
          />
        </div>  </div>


      {/* technologies we use  */}
      <div className='bg-[#FAFAFA] min-w-[375px] w-full flex flex-col items-center justify-center'>
        <div className='w-[335px] h-[118px] mt-[42px]'>
          <p
            className="text-center text-[32px] text-[#222222] font-semibold leading-[38.19px]"
            style={{
              fontFamily: 'SF UI Display, sans-serif',
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            Technologies&nbsp;
            <span
              className="text-[32px] text-[#94969D] font-semibold leading-[38.19px]"
              style={{
                fontFamily: 'SF UI Display, sans-serif',
                textDecorationSkipInk: 'none',
                textUnderlinePosition: 'from-font',
              }}
            >
              we use
            </span>
          </p>
          <p className="w-[335px] h-[68px] mt-[12px] text-[#6D6D6D] text-center text-[14px] font-normal leading-[16.71px] ">
            Discover the cutting-edge technologies we use to deliver innovative and impactful solutions, from modern frameworks to advanced cloud and machine learning tools
          </p>

        </div>
        <div className="md:hidden w-full max-w-sm mx-auto p-4 my-[40px] ">
          <Accordion type="single" collapsible className="w-full space-y-4 border-none">
            <AccordionItem value="backend" className="border-none rounded-none bg-[white]">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Backend
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {
                    backendTools.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item?.logo}
                          width={171}
                          height={120}
                          alt={item?.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>

            </AccordionItem>

            <AccordionItem value="frontend" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Frontend
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {frontendTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mobile" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Mobile
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {mobileTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="devops" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                DevOps
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {devopsTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="analytics" className="border-none rounded-none bg-white">
              <AccordionTrigger className="px-4 hover:no-underline text-[16px]">
                Analytics & Engagement
              </AccordionTrigger>
              <AccordionContent className="bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {analyticsTools?.map((item) => (
                    <div key={item.name} className="w-[171px] h-[120px] flex items-center justify-center bg-white">
                      <AccordionContent className="px-4 flex flex-col items-center justify-center">
                        <Image
                          src={item.logo}
                          width={171}
                          height={120}
                          alt={item.name.toLowerCase()}
                        />
                      </AccordionContent>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <ContactUsForm />
    </div>
  );
}

export default MobileUi;
