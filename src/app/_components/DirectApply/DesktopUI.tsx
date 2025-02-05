'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, } from "lucide-react";
import resumeUploadIcon from '@/utilities/icons/resume-upload.svg'
import checkCircleIcon from '@/utilities/icons/check-circle.svg'
import closeIcon from '@/utilities/icons/close.svg'
import axios from 'axios'
import toast from 'react-hot-toast';

function DesktopUi() {

    const [loading, setLoading] = useState(false);


    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onChange",
    });
    type FormData = {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        location: string;
        linkedProfile: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resume: File | any;
        // privacyPolicy: boolean;
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const formData = watch();



    const resumeFile = watch('resume');


    const createApplication = async (data: FormData) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('firstName', data.firstName);
            formData.append('lastName', data.lastName);
            formData.append('email', data.email);
            formData.append('phone', data.phone)
            formData.append('location', data.location)
            formData.append('linkedProfile', data.linkedProfile)
            formData.append('file', resumeFile[0])
            await axios.post('/api/applications', formData);
            toast.success('Application submitted successfully. We will review your resume and get back to you shortly.');
            setLoading(false);
            reset();
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong. Please try again later.');
            setLoading(false);
        }
    }

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log("data--->", data);
        createApplication(data);
    };



    return (
        <div className='my-[80px] bg-[#FAFAFA] min-h-screen'>
            <div className='flex items-center justify-between lg:py-[100px] lg:px-[124px] md:pt-[80px] md:pb-[100px] md:px-[60px] sm:py-[10px] sm:px-[20px] py-[10px] px-[20px] sm:flex-col flex-col md:flex-col lg:flex-row md:gap-[48px] sm:gap-6 gap-6'>
                <div className='flex flex-col gap-[12px] lg:py-0 md:py-0 sm:py-[20px] py-[20px]'>
                    <p className='lg:font-normal lg:text-[52px] lg:leading-[62.05px] md:font-medium md:text-[28px] md:leading-[33.41px] sm:text-[20px] sm:leading-[23.87px] text-[20px] leading-[23.87px] lg:text-[#131313] md:text-[#3D3D3D] lg:w-[456px] lg:text-start md:text-center sm:text-center text-center'>Step into your future with us.</p>
                    <p className='font-normal lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px] sm:text-[14px] sm:leading-[16.71px] text-[14px] leading-[16.71px] text-[#6D6D6D] md:text-center lg:text-start sm:text-center text-center'>Send us your application <br />we might just have the perfect spot for you soon!</p>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2">


                    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FormData>)}>
                        {/* Upload Resume */}
                        <div className="mb-4 w-full">
                            <div className='w-full'>
                                <label htmlFor="first-name" className="block text-sm mb-2">
                                    Resume*
                                </label>
                                {(resumeFile === null || resumeFile === undefined || resumeFile[0]?.name === undefined) ?
                                    (
                                        <div onClick={() => document.getElementById('fileInput')?.click()} className='w-full rounded-[8px] border border-[#4C6EFF] h-[52px] flex justify-center items-center gap-2 cursor-pointer'>
                                            <Image src={resumeUploadIcon} alt='resumeUploadIcon' width={24} height={24} />
                                            <p className='font-normal text-[16px] leading-[19.09px] text-[#4C6EFF]'>Upload Your Resume</p>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className='w-full rounded-[8px] px-4 border border-[#4C6EFF] bg-[#4C6EFF] h-[52px] flex justify-between items-center'>
                                            <div className='gap-2 flex items-center'>
                                                <Image src={checkCircleIcon} alt='checkCircleIcon' width={24} height={24} />
                                                <p className='font-normal text-[16px] leading-[19.09px] text-[#FFFFFF]'>{resumeFile[0]?.name}</p>
                                            </div>
                                            <div className='cursor-pointer' onClick={() => setValue('resume', null)}>
                                                <Image src={closeIcon} alt='closeIcon' width={16} height={16} />
                                            </div>
                                        </div>
                                    )
                                }
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept=".pdf,.docx"
                                    className="hidden"
                                    {...register("resume", {
                                        required: "Resume is required"
                                    })}
                                // onChange={handleFileChange}
                                />
                                {errors.resume && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.resume?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

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

                        {/* Location and Linked in profile */}
                        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">
                                    Location*
                                </label>
                                <input
                                    id="location"
                                    placeholder="Enter your location"
                                    {...register("location", {
                                        required: "Location is required",
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.location && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.location?.message?.toString()}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm mb-2">
                                    LinkedIn Profile*
                                </label>
                                <input
                                    id="linkedProfile"
                                    placeholder="Enter LinkedIn link"
                                    {...register("linkedProfile", {
                                        required: "LinkedIn profile is required",
                                        pattern: {
                                            value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                                            message: "Please enter a valid URL"
                                        }
                                    })}

                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.linkedProfile && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.linkedProfile?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        {/* Terms and conditions */}
                        {/* <div className='mb-6'>
                            <div className="flex py-[16px] gap-[10px]">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-[20px] cursor-pointer w-[20px] transition duration-150 ease-in-out"
                                    style={{ accentColor: "#1E3A76" }}
                                    {...register("privacyPolicy", {
                                        required: "Privacy Policy is required",
                                    })}
                                />
                                <p className='font-normal text-[14px] leading-[16.94px] text-[#11192B]'>By clicking this box, you will declare that you will read and <span className="hidden sm:inline"> <br /> </span>
                                    agree to the <span className='text-[#4C6EFF]'>Privacy policy</span> of Squadramedia</p>
                            </div>
                            {errors.privacyPolicy && (
                                <p className="text-red-500 text-sm mt-1">{errors.privacyPolicy?.message?.toString()}</p>
                            )}
                        </div> */}

                        {/* Submit Button */}
                        <Button disabled={loading} type="submit" className="px-6 py-4 float-right bg-black text-white rounded-md h-[48px] lg:w-[168px] md:w-full sm:w-full w-full">
                            {loading && <Loader2 className="animate-spin" />}  {loading ? "Please wait..." : "Apply Now"}
                            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DesktopUi