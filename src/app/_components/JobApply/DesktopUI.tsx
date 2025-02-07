/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, } from "lucide-react";
import resumeUploadIcon from '@/utilities/icons/resume-upload.svg'
import checkCircleIcon from '@/utilities/icons/check-circle.svg'
import closeIcon from '@/utilities/icons/close.svg'
import toast from 'react-hot-toast';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';

function DesktopUi({jobId}: {jobId: string | string[]}) {

    const [jobDetails, setJobDetails] = useState<any>(null);
    const [detailsLoading, setDetailsLoading] = useState(true);

    console.log(jobDetails, "jobDetails")
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`/api/jobs/${jobId}`);
                console.log('Job Details:', response.data);
                setJobDetails(response.data.data);
                setDetailsLoading(false);
                // You can set the job details to state here if needed
            } catch (error) {
                setDetailsLoading(false);
                console.error('Error fetching job details:', error);
            }
        };

        if (jobId) {
            fetchJobDetails();
        }
    }, [jobId]);

 
    // const [loading] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onChange",
    });
    type FormData = {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        // location: string;
        state: string,
        city: string,
        experience: string,
        joiningDays: string,
        webLink: string,
        linkedProfile: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resume: File | any;
        message: string;
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
            formData.append('phone',data.phone)
            formData.append('location',`${data.state}, ${data.city}`)
            formData.append('experience',data.experience)
            formData.append('joiningDays',data.joiningDays)
            formData.append('webLink',data.webLink)
            formData.append('linkedProfile',data.linkedProfile)
            formData.append('file',resumeFile[0])
            formData.append('additionalInfo',data.message)
            if (jobId) {
                formData.append('jobId', jobId.toString());
            }
            // formData.append('privacyPolicy',data.privacyPolicy)
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
        createApplication(data);
    };

    const router = useRouter()

    return (
        <div className='flex flex-col mt-[80px]'>
            <div className='hidden sm:inline'>
                <div className='pt-[45px] pb-[44px] lg:px-[124px] md:px-[60px] sm:px-[20px] px-[20px] bg-[#FAFAFA] flex items-center gap-3 hidden sm:flex '>
                    <p onClick={() => { router.push('/') }} className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>{detailsLoading ?  <Skeleton className="lg:w-[150px] md:w-[100px] h-[20px] rounded-lg" /> : "Home"}</p>
                    <Image src={applyIcon} alt='apply' width={18} height={18} />
                    <p onClick={() => { router.push('/careers?openings=true') }} className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>{detailsLoading ?  <Skeleton className="lg:w-[150px] md:w-[100px] h-[20px] rounded-lg" /> : "Careers"}</p>
                    <Image src={applyIcon} alt='apply' width={18} height={18} />
                    <p onClick={() => { router.push(`/job-details/${jobId}`) }} className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#888888] cursor-pointer'>{detailsLoading ?  <Skeleton className="lg:w-[150px] md:w-[100px] h-[20px] rounded-lg" /> : jobDetails?.jobTitle}</p>
                    <Image src={applyIcon} alt='apply' width={18} height={18} />
                    <p className='font-medium lg:text-[16px] lg:leading-6 md:text-[16px] md:leading-6 sm:text-md text-md sm:leading-6 text-[#1E3A76] cursor-pointer'>{detailsLoading ?  <Skeleton className="w-[150px] h-[20px] rounded-lg" /> : "Application Form"}</p>
                </div>
            </div>
            <div className='py-[40px] lg:px-[124px] md:px-[60px] sm:px-[20px] px-[20px] bg-[#FAFAFA] flex flex-col lg:gap-2 md:gap-2 sm:gap-1 gap-1'>
                <p className='font-medium lg:text-[28px] lg:leading-[33.41px] md:text-[28px] md:leading-[33.41px] sm:text-[20px] sm:leading-[23.87px] text-[20px] leading-[23.87px] text-[#3D3D3D]'>{detailsLoading ?  <Skeleton className="lg:w-[600px] md:w-[600px] sm:w-[300px] w-[300px] h-[30px] rounded-lg" /> : jobDetails?.jobTitle}</p>
                <div className='flex items-center lg:gap-3 md:gap-3 sm:gap-1 gap-1'>
                    <p className='font-normal lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>{detailsLoading ?  <Skeleton className="lg:w-[150px] md:w-[150px] sm:w-[90px] w-[90px] h-[30px] rounded-lg" /> : jobDetails?.location}</p>
                    <div className='w-[1px] h-[21px] bg-[#B0B0B0]'></div>
                    <p className='font-normal lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>{detailsLoading ?  <Skeleton className="lg:w-[150px] md:w-[150px] sm:w-[90px] w-[90px] h-[30px] rounded-lg" /> : jobDetails?.employmentType}</p>
                    <div className='w-[1px] h-[21px] bg-[#B0B0B0]'></div>
                    <p className='font-normal lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[12px] sm:leading-[14.32px] text-[12px] leading-[14.32px] text-[#4F4F4F]'>{detailsLoading ?  <Skeleton className="lg:w-[150px] md:w-[150px] sm:w-[90px] w-[90px] h-[30px] rounded-lg" /> : `${jobDetails?.yearsOfExperience} + Years Of Experience`}</p>
                </div>
            </div>
            <div className='pt-[40px] pb-[100px] lg:px-[124px] md:px-[60px] sm:px-[20px] px-[20px]'>

                <div className="w-full lg:w-[70%]">


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

                        {/* State and City */}
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">
                                    State*
                                </label>
                                {/* <input
                                    id="state"
                                    placeholder="Select"
                                    {...register("state", {
                                        required: "State is required",
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                /> */}
                                <select
                                    id="state"
                                    {...register("state", {
                                        required: "State is required",
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] text-sm"
                                >
                                    <option value="">Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                </select>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.state?.message?.toString()}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm mb-2">
                                    City*
                                </label>
                                <input
                                    id="city"
                                    placeholder="Enter City Name"
                                    {...register("city", {
                                        required: "city is required",
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.city?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        {/* Years of experience and Linked In profile */}
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="experience" className="block text-sm mb-2">
                                    Years of Experience*
                                </label>
                                <input
                                    id="experience"
                                    type='number'
                                    placeholder="Enter Years Of Experience"
                                    {...register("experience", {
                                        required: "Experience is required",
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.experience?.message?.toString()}</p>
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
                                            value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i,
                                            message: "Invalid LinkedIn profile URL"
                                        }
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.linkedProfile && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.linkedProfile?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        {/* Joining Date and website link */}
                        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">
                                    Joining In*
                                </label>
                                {/* <input
                                    id="joiningDays"
                                    type='number'
                                    placeholder="Select Days"
                                    {...register("joiningDays", {
                                        required: "Joining Days is required",
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                /> */}

                                <select
                                    id="joiningDays"
                                    {...register("joiningDays", {
                                        required: "Joining Days is required",
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] text-sm bg-white"
                                >
                                    <option value="">Select Days</option>
                                    <option value="7">7 Days</option>
                                    <option value="15">15 Days</option>
                                    <option value="30">30 Days</option>
                                    <option value="60">60 Days</option>
                                </select>
                                {errors.joiningDays && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.joiningDays?.message?.toString()}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">
                                    Website Link*
                                </label>
                                <input
                                    id="webLink"
                                    placeholder="Enter Github/Portfolio/etc..."
                                    {...register("webLink", {
                                        required: "Website Link is required",
                                        pattern: {
                                            value: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/i,
                                            message: "Invalid Website URL"
                                        }
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.webLink && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.webLink?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm mb-2">
                                Additional Information
                            </label>
                            <textarea
                                id="message"
                                placeholder="Enter Information"
                                {...register("message")}
                                className="w-full h-[152px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message?.message?.toString()}</p>
                            )}
                        </div>

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
                                    accept=".pdf,.docx,/*"
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

                        {/* Terms and conditions */}
                        {/* <div className='flex flex-col mb-6 '>
                            <div className="flex py-[16px] gap-[10px]">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-[20px] cursor-pointer w-[20px] transition duration-150 ease-in-out"
                                    style={{ accentColor: "#1E3A76" }}
                                    {...register("privacyPolicy", {
                                        required: "Privacy Policy is required",
                                    })}
                                />
                                <p className='font-normal text-[14px] leading-[16.94px] text-[#11192B]'>By clicking this box, you will declare that you will read and <span className="hidden sm:inline"> <br /> </span> agree to the <span className='text-[#4C6EFF]'>Privacy policy</span> of Squadramedia</p>
                            </div>
                            {errors.privacyPolicy && (
                                <p className="text-red-500 text-sm mt-1">{errors.privacyPolicy?.message?.toString()}</p>
                            )}
                        </div> */}


                        {/* Submit Button */}
                        <Button disabled={loading} type="submit" className="px-6 py-4 float-right bg-[#06135B] text-white rounded-md h-[48px] lg:w-full md:w-full sm:w-full w-full">
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