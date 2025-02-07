import React, { useEffect, useRef, useState } from "react";
import ServicesContainer from "./ServiceContainer";
const services = [
  {
    title: "Digital Marketing & PR",
    description:
      "We deliver end-to-end digital PR & SMM services. Strategic planning and your reliable partner.",
    list: [
      "Social Media Management",
      "SEO & SEM",
      "Performance Marketing",
      "Content Marketing",
      "Public Relations (PR)",
      "Marketing Automation",
      "Data & Analytics",
    ],
    onclick: "digitalMarketing",
    video:
      "https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/e676/95ad/-d85e-4252-ba31-17a50121e01d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pcXVBuTgsl5cCUkun~RmXOQSFQa0fwF3~EBmD~ukzpJSHfBTEJalvR0uQDYMe3foOyg0KIG6lPUhqzn1rt-qn8TwbHv4xju20AZFtZ659I9kB35dLJI9~G6iuIxviPZicHxPErUVoWQt2sl82sU7dHgyhQkvzxocIevMvQ2y48AOteJCgNKnpAsO9mDTFD2JA1kTtzt~wjrFD1zNnCEu4ALaAHs02OOzuBYypD~q5TVTbxJZ3Ek8kdmolZd~7TBsywqgx3HM3jm2ZXQ6QqG2JfitXD6vhCWEFmC-23LgYPIt3B3zPl-yI1n7iCNRQerA0aArzmbz4tHDko0IogWMWA__",
  },
  {
    title: "Branding & Creative",
    description:
      "We deliver brand identity like logos websites. Print collateral and a wide variety of creatives.",
    list: [
      "Logo Design & Brand Identity",
      "Print Design & Brand Identity",
      "UI/UX Design",
      "Digital Design",
      "Website Design Projects",
      "Product Design Projects",
    ],
    onclick: "branding",
    video:
      "https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/a77c/167a/-8ac5-4495-b67d-9c5937c24dab?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QDDrLvC1TKvj4VHL735-CdA5IEvRkhy7L~rrd63QqbVAL3DpwJ5zkoCNAWFjVTgTsrJnWiPqYdraJRtUSktc5hJ~uJJQmYNpOIGKQVqsffyq-oLrWxB21i6-53wSL3pTP2oc4~WafNLTQ35yv5ttnfWEZ~qaG-OBfulW6aDhXhVUlnnk6MzfKCgKlHyJjXIt0-4zF9Q3d6ssp0bNbC0bETucWd1kP5rzAQCOPNOde~CzTZoV9MsQSgqRSrypJtvCq00QAyWe0pP1pgTd9uK9vR--YEAQGSnDcPxZ32PoYsTP09WrMLAxOxoz8KF3nLPKK1rcHOv1-FZtXgxjJbUuVQ__",
    bg: "bg-[#9747FF]",
    text: "text-white",
  },
  {
    title: "Technology & Development",
    description:
      "We provide end-to-end web development solutions with deep understanding of latest technologies.",
    list: [
      "Web & Mobile App Development",
      "E-commerce Solutions",
      "AI & Machine Learning",
      "Cloud Solutions",
      "DevOps & Cybersecurity",
      "Quality Assurance & Testing",
    ],
    onclick: "technology",
    video:
      "https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/43cc/f57a/-fc6b-49cd-b5b4-111fcab1f486?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qz9rD62J~M9m5FdSAzX-M1jfQbZwyLd5w3iuwLCWkFmVH86zG7kfxEDVb8kGjq3KrAIhkaQbg95QrISI9hLFB-t27IlzpvFhNsCh7RcqFteH7W~XPtzpvM2jAzxMmk-K6FEsR3dggxzmwR8Ywis2-mbcDyUkDVX-FfBFoeL21JSTStb~2kFSsbbqpnyWR-7cBDQjnAWuVEtou8wGOvk6-A1eGuBXQRDtzi4oqkjQ2XawMtlLCVMKhXUkXTOQLntjR4u4AY1MP2h-DTtHsq9jBjaKhaU7GafPO0O-nhAQILZdrkfYNCyrpmg-swimgS2qJv0AwzEdDlSR8--wTNorXg__",
  },
  {
    title: "Photography & Videography",
    description:
      "DSLR Solutions for Photos & Videos to match your requirements.",
    list: [
      "Product Photography",
      "Corporate Photography",
      "Event Photography",
      "Video Production",
      "Professional Photography",
    ],
    onclick: "photography",
    video:
      "https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/43cc/f57a/-fc6b-49cd-b5b4-111fcab1f486?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qz9rD62J~M9m5FdSAzX-M1jfQbZwyLd5w3iuwLCWkFmVH86zG7kfxEDVb8kGjq3KrAIhkaQbg95QrISI9hLFB-t27IlzpvFhNsCh7RcqFteH7W~XPtzpvM2jAzxMmk-K6FEsR3dggxzmwR8Ywis2-mbcDyUkDVX-FfBFoeL21JSTStb~2kFSsbbqpnyWR-7cBDQjnAWuVEtou8wGOvk6-A1eGuBXQRDtzi4oqkjQ2XawMtlLCVMKhXUkXTOQLntjR4u4AY1MP2h-DTtHsq9jBjaKhaU7GafPO0O-nhAQILZdrkfYNCyrpmg-swimgS2qJv0AwzEdDlSR8--wTNorXg__",
    bg: "bg-[#FBAE17]",
    text: "text-white",
  },
  {
    title: "E-learning",
    description:
      "Transform training with custom LMS solutions, interactive content, and engaging assessment tools.",
    list: [
      "Learning Management System (LMS)",
      "Corporate Training Solutions",
      "Content Management System (CMS)",
      "Virtual Lab Apps",
      "Student Learning Platform",
    ],
    onclick: "elearning",
    video:
      "https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/1628/627a/-84f1-49a8-ba63-c305a369c715?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ip0tWN4PPLF3wYziRkkD8Ro3Muybkdh9L6xwfQeOKgy7bShXL~qlOnwkgsXn92RCgIuMiZR2aR91D3n~HkGcGri48okhiXxcet8KGMMP2kXzwhXJViMu1wr8xEW6DKjWqptTUydJ5wxQpf1kJgPYzfBDjc~AAM44YZbY9~n7V80AEisAupZuVUqQ-4eXSHBaePoRc0iObBwF1hxkGnEMJid2wZw-ETCyK~ELK4gOA7qZFRRl5t4lXpnbV3d~DlXGbMqKQV4tro-fxx3vIoAmhAOqsB7HU9ZCqfrihycu65MqsXT9uU5eFMqnfgxy1G7irLopKIumLwmBwTbKEmQMmg__",
  },
];
const Services = () => {
  const [activeTab, setActiveTab] = useState("Digital Marketing & PR");
  const serviceRefs = useRef({});
  const tabs = [
    "Digital Marketing & PR",
    "Branding & Creative",
    "Technology & Development",
    "Photography & Videography",
    "E-learning",
  ];

  useEffect(() => {
    services.forEach((service) => {
      serviceRefs.current[service.title] = React.createRef();
    });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Find the corresponding service
    const service = services.find((s) => s.title === tab);
    if (service && serviceRefs.current[service.title]?.current) {
      serviceRefs.current[service.title].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col items-center bg-white">
      {" "}
      <div className="hidden md:flex max-w-[1200px] space-x-8 border-b border-[#F3EBDC] mt-16 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-[18px] leading-[21.48px] max-w-[136px] lg:max-w-[240px] py-[30px] lg:px-[25px] ${
              activeTab === tab
                ? "border-b-2 border-[#FBAE17] text-[#06135B] font-semibold"
                : "text-[#A1A1A1]"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {services?.map((service, index) => (
        <div
          key={service.title}
          ref={serviceRefs.current[service.title]}
          className={`px-4 py-4 md:px-[30px] lg:px-[124px]  w-screen ${
            service.bg ? service.bg : "bg-[#F2F7FF]"
          }`}
        >
          <ServicesContainer service={service} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Services;
