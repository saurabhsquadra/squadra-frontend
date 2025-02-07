/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import applyIcon from '@/utilities/icons/apply-icon.svg'
import rightArrowIcon from '@/utilities/icons/right-arrow.svg'
import { useRouter } from "next/navigation";
import { Skeleton } from '@/components/ui/skeleton'


function DesktopUi() {

    const router = useRouter()

    const [loading,setLoading]=useState(true)

    // const jobSections = [
    //     {
    //         title: "StoryBoard (3)",
    //         content: "As a Senior UI/UX Designer, you will be responsible for creating user-centered designs for our clients' digital products. You will work closely with our development team to ensure that designs are implemented accurately and efficiently."
    //     },
    //     {
    //         title: "Illustration (4)",
    //         content: "As a Senior UI/UX Designer, you will be responsible for creating user-centered designs for our clients' digital products. You will work closely with our development team to ensure that designs are implemented accurately and efficiently."
    //     },
    //     {
    //         title: "Animation (3)",
    //         content: "• 5+ years of experience in UI/UX design\n• Strong portfolio demonstrating user-centered design solutions\n• Proficiency in design tools such as Figma, Sketch, or Adobe XD\n• Experience with design systems and component libraries\n• Excellent communication and collaboration skills"
    //     },
    //     {
    //         title: "Design (1)",
    //         content: "Bengaluru, India (On-site)"
    //     },
    //     {
    //         title: "Writing (2)",
    //         content: "• Competitive salary\n• Health insurance\n• Flexible working hours\n• Professional development opportunities\n• Collaborative and innovative work environment"
    //     }
    // ]

    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleAccordion = (index: number) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        )
    }


    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await fetch('/api/jobs')
                const data = await response.json()
                setJobs(data)
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
        getJobs()
    }, [])


    return (
        <div className='my-[80px] pt-[32px] xl:pb-[72px] lg:pb-[72px] md:pb-[72px] sm:pb-[72px] pb-[40px] xl:px-[124px] lg:px-[60px] md:px-[60px] sm:px-[60px] px-[20px] flex flex-col xl:gap-[42px] lg:gap-[42px] md:gap-[42px] sm:gap-[42px] gap-[32px] lg:items-center'>
            <div className='pt-[40px] pb-[44px] xl:w-[1180px] lg:w-[714px] md:w-[714px] flex items-center gap-[12px] hidden sm:flex'>
                <p onClick={() => { router.push('/') }} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Home</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p onClick={() => { router.push('/careers?openings=true') }} className='font-medium text-[16px] leading-6 text-[#888888] cursor-pointer'>Careers</p>
                <Image src={applyIcon} alt='apply' width={18} height={18} />
                <p className='font-medium text-[16px] leading-6 text-[#1E3A76] cursor-pointer'>All Openings</p>
            </div>
            <div className='pb-[38px] flex flex-col xl:gap-[72px] lg:gap-[72px] md:gap-[72px] sm:gap-[72px] gap-[32px] xl:w-[1180px] lg:w-[714px] md:w-[714px]'>
                <p className='font-[300] xl:text-[62px] xl:leading-[50px] lg:text-[62px] lg:leading-[50px] md:text-[62px] md:leading-[50px] sm:text-[62px] sm:leading-[50px] text-[28px] leading-[33.41px] text-[#131313] flex justify-center'>All Openings</p>

                <div>
            {loading ? (
                <div className="flex flex-col gap-4 items-center justify-center">
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px] h-[40px] rounded-lg" />
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px] h-[40px] rounded-lg" />
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px]  h-[40px] rounded-lg" />
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px]  h-[40px] rounded-lg" />
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px]  h-[40px] rounded-lg" />
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px]  h-[40px] rounded-lg" />
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px]  h-[40px] rounded-lg" />
                    <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px]  h-[40px] rounded-lg" />
                </div>
            ) : (
                // @ts-ignore
                jobs.data?.map((category, index) => (
                    <div
                        key={index}
                        className={`border-b ${index === 0 ? "border-t" : ""} ${
                            openIndexes.includes(index)
                                ? "border-t border-[#06135B]"
                                : "border-[#E7E7E7]"
                        }`}
                    >
                        <button
                            className="flex justify-between items-center w-full xl:py-7 lg:py-7 md:py-7 sm:py-7 py-4 text-left"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="xl:text-[24px] xl:leading-[28.64px] lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px] sm:text-[24px] sm:leading-[28.64px] text-[16px] leading-[19px] text-[#3D3D3D] font-medium">
                                {category._id} ({category.jobsCount})
                            </span>
                            {openIndexes.includes(index) ? (
                                <Image src={minusIcon} alt="close" />
                            ) : (
                                <Image src={plusIcon} alt="open" />
                            )}
                        </button>
                        {openIndexes.includes(index) && (
                            <div>
                                <ul className="xl:pl-[0px] lg:pl-[0px] md:pl-[0px] sm:pl-[0px] pl-[0px] border-t border-[#B0B0B0]">
                                    {/* @ts-ignore */}
                                    {category.jobs?.map((job, jobIndex) => (
                                        <li
                                            key={jobIndex}
                                            onClick={() => router.push(`/job-details/${job._id}`)}
                                            className={`border-[#B0B0B0] flex justify-between xl:py-[16px] lg:py-[16px] md:py-[16px] sm:py-[16px] py-[8px] xl:pl-[40px] xl:pr-[32px] lg:pl-[40px] lg:pr-[32px] md:pl-[40px] md:pr-[32px] ${jobIndex!==category.jobs.length-1 && 'border-b border-[#B0B0B0]'}`}
                                        >
                                            <div className={`flex flex-col justify-between gap-[2px] cursor-pointer`}>
                                                <p className="font-normal xl:text-[20px] xl:leading-[23.87px] lg:text-[18px] lg:leading-[21.48px] md:text-[18px] md:leading-[21.48px] sm:text-[18px] sm:leading-[21.48px] text-[16px] leading-[16.71px] text-[#3D3D3D]">
                                                    {job.jobTitle}
                                                </p>
                                                <div className={`flex xl:items-center lg:items-center sm:items-center items-start xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-[0px]`}>
                                                    <p className="py-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[14px] sm:leading-[16.71px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                        {job.location}
                                                    </p>
                                                    <div className='w-[1px] h-[21px] bg-[#B0B0B0] hidden sm:flex'></div>
                                                    <div className="py-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[14px] sm:leading-[16.71px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                        {job.employmentType}
                                                    </div>
                                                    <div className='w-[1px] h-[21px] bg-[#B0B0B0] hidden sm:flex'></div>
                                                    <div className="py-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[14px] sm:leading-[16.71px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                        {job.yearsOfExperience}+ Years of Experience
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group flex items-center xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-1 cursor-pointer">
                                                <div className="xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px] sm:w-[24px] sm:h-[24px] w-[20px] h-[24px]">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6 text-gray-500 group-hover:text-[#1E3A76] transition-all duration-300"
                                                    >
                                                        <path
                                                            d="M4 12.8789H20M20 12.8789L14 6.87891M20 12.8789L14 18.8789"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <p
                                                    onClick={() => router.push(`/job-apply/${job._id}`)}
                                                    className="font-normal xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[14px] leading-[24px] text-[#888888] group-hover:text-[#1E3A76]"
                                                >
                                                    Apply
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
            </div>

            <div className='xl:py-[60px] xl:px-[40px] lg:py-[60px] lg:px-[40px] md:py-[60px] md:px-[40px] sm:py-[60px] sm:px-[40px] py-[40px] px-[20px] bg-[#FAFAFA] flex items-center xl:justify-between lg:justify-between md:justify-between sm:gap-[40px] gap-[40px] xl:w-[1180px] lg:w-[714px] md:w-[714px] xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col'>
                <div className='flex flex-col xl:gap-[18px] lg:gap-[18px] md:gap-[18px] sm:gap-[18px] gap-[12px]'>
                    <p className='font-medium xl:text-[40px] xl:leading-[48px] lg:text-[40px] lg:leading-[48px] md:text-[40px] md:leading-[48px] sm:text-[40px] sm:leading-[48px] text-[20px] leading-[24px] text-[#131313]'>Didn&apos;t find the role <br />you were looking for? </p>
                    <p className='font-normal xl:text-[18px] xl:leading-[26px] lg:text-[18px] lg:leading-[26px] md:text-[18px] md:leading-[26px] sm:text-[18px] sm:leading-[26px] text-[14px] leading-[19px] text-[#454545]'>No worries! <span className='font-medium'>Send us your application </span> <br />we might just have the perfect spot for you soon!</p>
                </div>
                <div onClick={() => router.push('/direct-apply')} className='xl:w-[139px] lg:w-[139px] md:w-[139px] sm:w-[139px] w-full xl:h-[58px] lg:h-[58px] md:h-[58px] sm:h-[58px] h-[52px] rounded-[4px] flex items-center justify-center gap-2 bg-[#131313] cursor-pointer'>
                    <p className='font-normal text-[16px] leading-[18px] text-[#FFFFFF]'>Apply</p>
                    <Image src={rightArrowIcon} alt='right-arrow' width={24} height={24} />
                </div>
            </div>
        </div>
    )
}

export default DesktopUi