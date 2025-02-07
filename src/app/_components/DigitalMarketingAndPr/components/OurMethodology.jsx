import Image from "next/image";
import React from "react";

const OurMethodology = () => {
  // Data for the alternating sections
  const sections = [
    {
      number: "1",
      bgColor: "black",
      heading: "Social Media Management",
      description:
        "We schedule a meeting to discuss your goals, challenges, and vision, laying the foundation for a tailored approach to propel your brand forward.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/c285/fc88/13d93aa0669f79a8dd5c4ce094b8afa3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R6H7~phYcRcixpoezh45T3hS-y2LJRgapLi0vlqN4WPLC8pgc93iMXdZZhyvwyrqQD6LTpswGukmLqWk4mgclUjU2Phn1p1LaGfiGR3pTvkVce-9nbkT7orQuxrURqP6lET~LLIygd1wzhry66t9UvoOd9sDUKa8QgHZPjdLdocLHoq3f4ehhfHEjgrBophSgIh8lrzmER9RlHJO-oKwpuWzzLLUBjx343UNK9N9DM9fFQBXKgH57pM5yO-69QyNSpj02D13Jc2xwoORzSmWBUvaZYlXTrByiIA8lLRDoXk2vn4Fzno2xIXtIQoQJ7P5H7Q2Vj42ISJsA1XcVFSqIw__", // Replace with your image URL
    },
    {
      number: "2",
      bgColor: "blue",
      heading: "SEO & SEM",
      description:
        "We craft a custom plan tailored to your brand's needs and goals, setting clear objectives and outlining actionable tactics for success.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/23d9/c873/14ac8a70600ff56d900cdf37c7709b07?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MfAT4CLk~3xSjkCXNnDaQfuj-6u00IywyxavT3H9hPcuKnfSaQQ8fikK0VGEbhUOJ~d4kNyzOJc9XmsNetbQ1ks4GSWfUPWuX-U6B4GiwINv9CZDSmaG1TE1i1BVMgZoW3k-F80tJkJQ-mR8H0SaFFvurHyZN3KwYPymDppxuiiwZ5noMjExMJ~DpH0IvPx1MXN1YZ-f77MnBJAJCJgEsspBsPm2vkVbrDnVLAWb9KsYzyz-fVMrhSIAVhlrwRA2GsOqwbpN2di19iLGEXvDnt5bh2lAOLwtIEbeFI5g2OiUDpvgOuzya6t5LUg7JRDaRHba-lqRmosd63qNEP8-qg__", // Replace with your image URL
    },
    {
      number: "3",
      bgColor: "black",
      heading: "Performance & content Marketing ",
      description:
        "We bring the strategy to life with precision. With your approval, our team handles every aspect, from creative design to technical execution.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/beda/bfd2/e6891448c30acceef2f24e2daf6133a8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uz7fGXdXyTDOuZPOL2ezO54BMOsWjyBO8yxN~udmhDVO8~-pdr8c7~hLSnobTcQ0BmSsRuNoTSjblConuH0GVIiaqDQqL~EDMdPqw~7Hke8sl2gIJl2AIunj9ZRl4MObQs6caEIY3qgrSDxXzAMP6NTANTZEo1LH6CjnuVJnb7-wMc-X0-3UvC0RL8dgyfqIYwGxfmGMrmzY8KelNuIy6FljQyWFHayQSnRuDLcQpKTtn~q~rWOQpMJBKGJUryGSLP0f3GtYrXOS8fY2RHPgPF1XVaeD9YzxzgT0ABVOBBajPA7iiWgmDSZZoTyQV~PhCtQjqdOVZKxMcZhvtHMyfg__", // Replace with your image URL
    },
    {
      number: "4",
      bgColor: "blue",
      heading: "Public Relations (PR)",
      description:
        "We don't just launch the campaign and call it a day. We continually monitor metrics, gathering insights and making adjustments to optimize results.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6e13/d14d/047097d3da7aa5d2d7320767a6233123?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZgQsAkwi0W6RllhOCUMmL8sGXS~0RGcoKzwhwqGE2icNGajAg0PAd~p0eMWFFunGIJDC-PTB~OvnZtDeUiCXofeFYYSioie4PZWy~H7G42Mh0x92ObmncbRUK~2yX~BlzhFr-VestP-CPzyE-ejm7dsMEOPK0RYByYo28V9wr534-rkD8msv7gTxPN8CCmBPomQ6AA7LFuCXSeVWyUJHSuyVxOdCm3hbN1vcrDKH1g4kmOsZVC5dWWkSV9mVGMYee3ujmQkpKMZtVlwCbWFGcw65CV-ZKGf9Jy19twbJJk~ol2XhRwW~0IY0tCyNHai6HoPWg05Qgyoecw1~hZiEQ__", // Replace with your image URL
    },
    {
      number: "5",
      bgColor: "black",
      heading: "Data & Analytics",
      description:
        "We maintain open communication, providing regular updates and detailed reports on campaign performance, allowing you to track progress.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/63ba/f704/511b4c90edf650cf20a98a5dc6aeff44?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=elESghhAkErmDeiREPntQgLk2-JbPyypat4MmwDrSfoAIwKNDj6C58wOHWhz7k3hLICCP5c~LVVY4~XRaaWBq1ToWEqyA7vi0HW5mFN5~rSt5vb4uYl8yiIbailtahl9vdH~Z2-H54flYFrS0G0muBgF-NdwD54xBNJ6WVIG4vZMfjjlGd9GMFfv56FX8XX9X1lKtlurtbWFiDq8SEz1xH-UO5tq9svqrb9lBSGvnEU8z1OCRU5XTZoEuYRlAgW~RWs8mQeHNdt2AWmaZ2Y8c2qt9VY6i0~8iT8ZBjyDyQbQy4RiC9OtFAUB84PtWM4ln3XUjS5iYS2G~QF5i6yl6g__", // Replace with your image URL
    },
  ];

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="py-24 md:py-36 bg-[#06135B] w-full flex flex-col justify-center items-center text-center text-white gap-4">
        <div className="uppercase text-[14px] md:text-[16px]">Our Services</div>
        <div className="text-4xl md:text-7xl lg:font-bold uppercase">
          <span className="opacity-50">OUR Winning</span> <br />
          <span>Methodology</span>
        </div>
        <div className="text-[14px] md:text-[16px] lg:text-[18px] w-[295px] md:w-[550px] font-[400]">
          We don’t just run campaigns; we build connections between your brand
          and your audience.
        </div>
      </div>

      {/* Alternating Black and Blue Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${
            section.bgColor === "black" ? "bg-black" : "bg-[#06135B]"
          }`}
        >
          <div className="flex items-center justify-between w-full md:max-w-[800px] lg:max-w-[1400px] flex-wrap py-10 pb-4 md:py-[55px] lg:py-[150px]">
            <div
              className={`text-[130px] md:text-[220px] lg:text-[240px] pl-6 font-[400] ${
                section.bgColor === "black" ? "text-white" : "text-yellow-300"
              }`}
            >
              {section.number}
            </div>

            <div className="max-w-[300px] lg:max-w-[490px] w-full px-4 text-white">
              <h2 className="text-[20px] md:text-[32px] lg:text-[48px] font-bold uppercase">
                {section.heading}
              </h2>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-[300] mt-4">
                {section.description}
              </p>
            </div>

            <div className="m-4">
              <Image fill
                src={section.imageUrl}
                alt="Section"
                className="w-full md:w-[274px] lg:w-[474px] bg-gray-700 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurMethodology;
