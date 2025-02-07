// eslint-disable-next-line @typescript-eslint/ban-ts-comment
"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, } from "lucide-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import generalEnquiryIcon from '@/utilities/icons/general-enquiry.svg'
import salesEnquiryIcon from '@/utilities/icons/sales-enquiry.svg'
import hrEnquiryIcon from '@/utilities/icons/hr-enquiry.svg'
import Image from "next/image";

export default function ContactUsForm() {
  const [activeTab, setActiveTab] = useState("inquiry");
 const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",});
  type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
};

 const onSubmit: SubmitHandler<FormData> = async (data) => {
  setLoading(true);
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: [process.env.NEXT_PUBLIC_EMAIL_TO],
        cc: [''], 
        bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
        message: {
          subject: activeTab === "inquiry" ? `GENERAL INQUIRY` : `QUOTE ENQUIRY`,
          text: 'YOUR TEXT',
          html: `
          <html>
            <head></head>
            <body>
              <p>Hello Team</p>
              <p><b>Full Name:</b> ${data.firstName}  ${data.lastName}</p>
              <p><b>Email:</b> ${data.email}</p>
              <p><b>Phone number: </b> ${data.phone}</p>
              ${activeTab === "inquiry" ? `<p><b>Subject:</b> ${data.subject}</p>` : ''}
              <p><b>Message:</b> ${data.message}</p>
              <br>
              <p>Thank you & Regards,<br><b>Team</b></p>
            </body>
          </html>`,
        },
      }),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success(result.message,{duration:3000});
    } else {
      toast.error(result.message || 'Failed to send email',{duration:3000});
    }
  } catch (error) {
    toast.error('An error occurred while sending the email');
    console.error('Error sending email:', error);
  } finally {
    setLoading(false);
  }
};


  const handleTabClick = (tab: React.SetStateAction<string>) => {
    console.log(tab,"tab")
    setActiveTab(tab);
  };

  const enquiryOptions=[
    {
      title:"General Enquiry",
      phoneNumber:"+91 96068 27067",
      icon:generalEnquiryIcon
    },
    {
      title:"Sales Enquiry",
      phoneNumber:"+91 96068 27067",
      icon:salesEnquiryIcon
    },
    {
      title:"HR Enquiry",
      phoneNumber:"+91 96068 27067",
      icon:hrEnquiryIcon
    }
  ]

  return (
    <div className="max-w-screen-2xl flex flex-col pt-24 lg:pt-24 md:pt-20 sm:pt-15 lg:flex-row  md:mt-0 justify-between p-10 lg:p-20 md:p-10 space-y-10 lg:space-y-0 lg:space-x-2">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[54px] font-[400] mb-8">
          Discover Digital Transformation
        </h2>
        <p className="text-[#6D6D6D] max-w-[400px]">
          Please feel free to share your thoughts and we can discuss it over a
          cup of tea.
        </p>

        <div className="flex lg:flex-col flex-row sm:gap-[35px] justify-between mt-[50px]">
          {enquiryOptions.map((item,index)=>{
            return(
              <div key={index} className="flex sm:items-start items-center sm:flex-row flex-col xl:gap-6 lg:gap-[10px] md:gap-[10px] gap-[10px]">
                <div className="xl:h-[70px] xl:w-[70px] lg:h-[55px] lg:w-[55px] md:h-[55px] md:w-[55px] sm:h-[55px] sm:w-[55px] w-[25px] h-[25px]">
                  <Image src={item.icon} alt="icon" className="w-full h-full" />
                </div>
                <div className="flex flex-col xl:gap-[10px] sm:gap-[9px] gap-[4px]">
                  <p className="font-semibold sm:text-[18px] sm:leading-[26px] text-[10px] leading-[12.1px] text-[#111928]">{item.title}</p>
                  <p className="font-normal sm:text-[16px] sm:leading-[24px] text-[10px] leading-[12.1px] text-[#637381]">{item.phoneNumber}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <div className="mb-10">
          <div className="flex space-x-8">
            {/* <button
              className={`py-2 text-lg border-b-2 hidden ${
                activeTab === "quote" ? "border-b-yellow-500" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick("quote")}
            >
              Get a Quote
            </button> */}
            <button
              className={`py-2 text-lg border-b-2 ${
                activeTab === "inquiry" ? "border-b-yellow-500" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick("inquiry")}
            >
              General Inquiry
            </button>
          </div>
        </div>

<form onSubmit={handleSubmit(onSubmit as SubmitHandler<FormData>)}>    
        {/* First Name and Last Name */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm mb-2">
                First Name*
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors?.firstName?.message?.toString()}</p>
              )}
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm mb-2">
                Last Name 
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors?.lastName?.message?.toString()}</p>
              )}
            </div>
          </div>

          {/* Email and Phone Number */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email*
              </label>
              <input
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors?.email?.message?.toString()}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">
                Phone Number*
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Phone number must be at least 10 characters" },
                  maxLength: { value: 10, message: "Phone number must be at most 10 characters" },
                })}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors?.phone?.message?.toString()}</p>
              )}
            </div>
          </div>
          
              {activeTab==="inquiry" &&   <div className="mb-4">
              <label htmlFor="subject" className="block text-sm mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                {...register("subject")}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
              />
             
            </div>
              }
          {/* Tell Us More */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm mb-2">
              Tell us more
            </label>
            <textarea
              id="message"
              placeholder="Tell us more"
              {...register("message")}
              className="w-full h-[152px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
            ></textarea>
          {errors.message && (
  <p className="text-red-500 text-sm mt-1">{errors.message?.message?.toString()}</p>
)}
          </div>

          {/* Submit Button */}
         <Button disabled={loading} type="submit" className="px-6 py-2 float-right bg-black text-white rounded-md">
          {loading && <Loader2 className="animate-spin" /> }  {loading ? "Please wait..." : (activeTab === "quote" ? "Send Inquiry" : "Submit")} 
          {!loading && <ArrowRight className="ml-2 h-4 w-4" />  }
          </Button>
        </form>
      </div>
    </div>
  );
}
