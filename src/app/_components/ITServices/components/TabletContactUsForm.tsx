// eslint-disable-next-line @typescript-eslint/ban-ts-comment
"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, } from "lucide-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactUsForm() {
    const [activeTab, setActiveTab] = useState("quote");
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



    const handleTabClick = (tab: React.SetStateAction<string>) => {
        console.log(tab, "tab")
        setActiveTab(tab);
    };

    return (
        <div className="w-full h-[1180px] bg-[#06135B] flex flex-col pt-[60px] mx-auto justify-center items-center">
            {/* Left Section */}
            <div className="flex flex-col">
                <div className="flex flex-col gap-[12px]">
                    <p className="font-bold text-[20px] leading-[23.87px] text-[#FFFFFF]">Contact Us.</p>
                    <div className="w-[30px] h-[4px] bg-[#FFFFFF]"></div>
                </div>
                <div className="flex flex-col gap-[24px] mt-[38px] justify-center items-center">
                    <h2 className="text-[40px] leading-[40.73px] text-[#FFFFFF] font-[700] w-[434px] text-center">
                        Let’s talk about <br/> your <span className="text-[#FBAE17]">project</span>.
                    </h2>
                    <p className="text-[#FFFFFF] font-normal text-[16px] leading-[32px] w-[714px] text-center">
                        Please feel free to share your thoughts and we can
                        discuss it over a cup of tea.
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-[677px] h-[715px] bg-[#FFFFFF] py-[63px] px-[32px] rounded-[12px] mt-[38px]">
                <div className="mb-10">
                    <div className="flex space-x-8">
                        <button
                            className={`py-2 text-lg border-b-2 ${activeTab === "quote" ? "border-b-yellow-500" : "border-b-transparent"
                                }`}
                            onClick={() => handleTabClick("quote")}
                        >
                            Get a Quote
                        </button>
                        <button
                            className={`py-2 text-lg border-b-2 ${activeTab === "inquiry" ? "border-b-yellow-500" : "border-b-transparent"
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

                    {activeTab === "inquiry" && <div className="mb-4">
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

                    <div className="flex justify-end">
                        <Button disabled={loading} type="submit" className="w-[188px] h-[48px] rounded-[8px] py-[16px] px-[24px] bg-[#06135B]">
                            {loading && <Loader2 className="animate-spin" />}  {loading ? "Please wait..." : (activeTab === "quote" ? "Send Inquiry" : "Submit")}
                            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}