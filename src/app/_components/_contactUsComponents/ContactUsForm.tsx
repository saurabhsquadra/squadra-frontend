// eslint-disable-next-line @typescript-eslint/ban-ts-comment
"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, } from "lucide-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactUsForm() {
  const [activeTab] = useState("quote");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });
  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    subject: string;
    terms: boolean;
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
        toast.success(result.message, { duration: 3000 });
      } else {
        toast.error(result.message || 'Failed to send email', { duration: 3000 });
      }
    } catch (error) {
      toast.error('An error occurred while sending the email');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };



  

  return (
    <div className="flex flex-col pt-24 sm:pt-15 lg:flex-col  md:mt-0 justify-between p-10 px-[20px] md:p-10 lg:pt-[144px] lg:pb-[72px] md:pt-[144px] md:pb-[72px] sm:px-[20px] space-y-10 bg-[#FAFAFA] items-center">
      {/* top Section */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[54px] font-[400] mb-3">
          Let’s Talk
        </h2>
        <p className="text-[#6D6D6D] text-center lg:max-w-[663px]">
          We value your insights and look forward to meaningful discussions. Share your thoughts
          with us, and let’s explore the possibilities together.
        </p>
      </div>

      {/* bottom Section */}
      <div className="w-full lg:w-[840px] md:w-[714px] bg-[#FFFFFF] p-[32px]">

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
                type="tel"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
                })}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm appearance-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors?.phone?.message?.toString()}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
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

          {/* Terms and conditions */}
          <div className="mb-6 flex-col py-[16px]">
            <div className="flex gap-[10px]">
              <input
                type="checkbox"
                className={`form-checkbox h-[20px] cursor-pointer w-[20px] transition duration-150 ease-in-out border ${errors.terms ? "border-red-500" : ""}`}
                style={{ accentColor: "#1E3A76" }}
                {...register("terms", { required: "Please check Privacy Policy" })}
              />
              <p className='font-normal text-[13px] leading-[20px] text-[#6d6d6d] lg:w-[60%] md:w-[75%]'>I have read the privacy policy and consent to the processing of my data for the purpose of handling my enquiry</p>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">{errors?.terms?.message?.toString()}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button disabled={loading} type="submit" className="w-full h-[48px] float-right bg-black text-white rounded-md">
            {loading && <Loader2 className="animate-spin" />}  {loading ? "Please wait..." : (activeTab === "quote" ? "Submit" : "Submit")}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
}
