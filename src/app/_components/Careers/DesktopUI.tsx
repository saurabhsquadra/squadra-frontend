/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import careerImage from '@/utilities/images/career-image.png'

import rightArrowIcon from '@/utilities/icons/right-arrow.svg'
import plusIcon from '@/utilities/icons/plus-icon.svg'
import minusIcon from '@/utilities/icons/minus-icon.svg'
import growthIcon from '@/utilities/icons/growth-icon.svg'
import remunerationIcon from '@/utilities/icons/remuneration-icon.svg'
import workplaceIcon from '@/utilities/icons/workplace-icon.svg'
import workEnvironmentIcon from '@/utilities/icons/work-environment-icon.svg'
import TalentIcon from '@/utilities/icons/talent-icon.svg'
import WorkBalanceIcon from '@/utilities/icons/work-balance.svg'
import { useRouter } from "next/navigation";
import { Skeleton } from '@/components/ui/skeleton'



function DesktopUi() {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

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
    


    const router = useRouter()

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const openingsParam = searchParams.get("openings");
        if (openingsParam==="true") {
            // Scroll to the specific section if coming from job-details
            document.getElementById("job-openings")?.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    

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

    const employeeBenefits = [
        {
            icon: growthIcon,
            title: "01. Growth Opportunities",
            description: "At Squadra Media, we believe learning never stops. We’re dedicated to fostering growth and helping employees achieve their best."
        },
        {
            icon: remunerationIcon,
            title: "02. Competitive Remuneration",
            description: "We value our employee's contributions and ensure they’re rewarded for their dedication and growth."
        },
        {
            icon: workplaceIcon,
            title: "03. Eco-friendly Workplace",
            description: "Surrounded by nature, our workspace promotes mental well-being while reducing our carbon footprint."
        },
        {
            icon: workEnvironmentIcon,
            title: "04. An Instagram-worthy Fun Work Environment",
            description: "Our beautifully designed office is a productivity booster and an Instagram-worthy spot every day."
        },
        {
            icon: TalentIcon,
            title: "05.Talent Nurturing Community",
            description: "We help employees achieve career goals while encouraging them to explore hidden talents and make a difference."
        },
        {
            icon: WorkBalanceIcon,
            title: "06. Work-Life Balance",
            description: "We promote a healthy balance between work and personal life to enhance happiness, well-being, and productivity."
        }
    ]


    const [openIndexes, setOpenIndexes] = useState<number[]>([])

    const toggleAccordion = (index: number) => {
        setOpenIndexes(prevIndexes =>
            prevIndexes.includes(index)
                ? prevIndexes.filter(i => i !== index)
                : [...prevIndexes, index]
        )
    }

    return (
        <div className='flex flex-col justify-center'>
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className={`absolute inset-0 transition-opacity duration-1000 opacity-100'}`}
                >
                    <Image
                        src={careerImage}
                        alt={`Carousel image`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Content */}
                <div className='flex flex-col gap-[150px] absolute inset-0 xl:mt-[390px] lg:mt-[390px] md:mt-[504px] sm:mt-[504px] mt-[360px]'>
                    <div className="flex flex-col justify-center items-center xl:gap-[56px] lg:gap-[42px] md:gap-[42px] sm:gap-[42px] gap-[44px]">
                        <div className='flex flex-col xl:gap-1 lg:gap-1 md:gap-2 items-center'>
                            <p className='sm:font-[265] font-[265] xl:text-[80px] xl:leading-[95.47px] lg:text-[56px] lg:leading-[66.83px] md:text-[56px] md:leading-[66.83px] sm:text-[56px] sm:leading-[66.83px] text-[40px] leading-[38.19px] text-[#FFFFFF] text-center xl:w-full md:w-full sm:w-full w-[308px]'>Step into your future with us.</p>
                            <div className='py-[10px]'>
                                <p className='font-normal text-[16px] leading-6 text-[#FFFFFF] text-center xl:max-w-[700px] lg:max-w-[469px] md:max-w-[469px] sm:max-w-[469px] max-w-[370px]'>We aim to bring positivity to every step we take. If you share that vision, Squadra Media is the place for you</p>
                            </div>
                        </div>

                        <div onClick={() => router.push('/openings')} className='w-[200px] h-[48px] rounded-[4px] border-[.5px] border-l-[.7px] px-2 border-[#FFFFFF]  flex items-center justify-center gap-2 cursor-pointer'>
                            <p className='font-medium text-[18px] leading-[18px] text-[#FFFFFF]'>All openings</p>
                            <Image src={rightArrowIcon} alt='Openings' />
                        </div>
                    </div>
                </div>


            </div>

            {/* Current Opening */}
            <div id='job-openings' className="w-full flex flex-col items-center md:pt-[15px]">
                <div className="flex flex-col sm:pt-[72px] pt-[40px] pb-[72px]  lg:px-[0px] md:px-[0px] gap-[42px] xl:w-[1180px] lg:w-[714px] md:w-[714px] sm:w-[714px] w-[335px]">
                    <div className="flex flex-col sm:gap-[72px] gap-[32px] justify-center">
                        <p className="font-[300] xl:text-[62px] lg:text-[48px] md:text-[48px] xl:leading-[50px] lg:leading-[50px] md:leading-[50px] sm:text-[48px] sm:leading-[50px] text-[28px] leading-[33.41px] text-[#131313] text-center">
                            Current openings
                        </p>
                        <div>
                            {loading ? <div className="flex flex-col gap-4 items-center justify-center">
                                <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px] h-[40px] rounded-lg" />
                                <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px] h-[40px] rounded-lg" />
                                <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px] h-[40px] rounded-lg" />
                                <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px] h-[40px] rounded-lg" />
                                <Skeleton className="xl:w-[900px] md:w-[600px] sm:w-[600px] w-[300px] h-[40px] rounded-lg" />
                            </div> :
                                jobs?.data?.slice(0, 3)?.map((category: { _id: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; jobsCount: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; jobs: any[] }, index: React.Key | null | undefined) => (
                                    <div key={index}>
                                        <div
                                            className={`border-b ${openIndexes.includes(index) ? "border-t border-[#06135B]" : "border-[#E7E7E7]"}`}
                                        >
                                            <button
                                                className="flex justify-between items-center w-full xl:py-7 lg:py-7 md:py-7 sm:py-7 py-4 text-left"
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <span className="xl:text-[24px] xl:leading-[28.64px] lg:text-[24px] lg:leading-[28.64px] md:text-[24px] md:leading-[28.64px]  sm:text-[24px] sm:leading-[28.64px] text-[#3D3D3D] font-medium">
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
                                                    <ul className="xl:pl-[100px] lg:pl-[100px] md:pl-[100px] sm:pl-[100px] pl-[6px] border-t border-[#B0B0B0]">
                                                        {category.jobs.map((job: {
                                                            _id: React.Key | null | undefined; jobTitle: string
                                                            jobDescription: string; companyDescription: string; location: string; jobType: string; jobLevel: string; salary: string; experience: string; benefits: string; applyLink: string; employmentType: string

                                                        },jobIndex: number) => (
                                                            <li onClick={() => router.push(`/job-details/${job._id}`)}
                                                                key={job._id}
                                                                className={`border-[#B0B0B0] flex justify-between xl:py-[16px] lg:py-[16px] md:py-[16px] sm:py-[16px] py-[8px] xl:pl-[40px] xl:pr-[32px] lg:pl-[40px] lg:pr-[32px] md:pl-[40px] md:pr-[32px] ${jobIndex!==category.jobs.length-1 && 'border-b border-[#B0B0B0]'}`}
                                                            >
                                                                <div className="flex flex-col justify-between gap-[2px] cursor-pointer">
                                                                    <p className="font-normal xl:text-[20px] xl:leading-[23.87px] lg:text-[18px] lg:leading-[21.48px] md:text-[18px] md:leading-[21.48px] sm:text-[18px] sm:leading-[21.48px] text-[16px] leading-[16.71px] text-[#3D3D3D]">
                                                                        {job.jobTitle}
                                                                    </p>
                                                                    <div className="flex xl:items-center lg:items-center sm:items-start items-start xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-0">
                                                                        <p className="py-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[14px] sm:leading-[16.71px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                                            {job.location}
                                                                        </p>
                                                                        <div className='w-[1px] h-[21px] bg-[#B0B0B0] hidden sm:flex'></div>
                                                                        <div className="py-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[14px] sm:leading-[16.71px] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                                            {job.employmentType}
                                                                        </div>
                                                                        <div className='w-[1px] h-[21px] bg-[#B0B0B0] hidden sm:flex'></div>
                                                                        <div className="py-1 font-[300] xl:text-[14px] xl:leading-[16.71px] lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] sm:text-[14px] sm:leading-[16.71p] text-[12px] leading-[14.32px] text-[#4F4F4F]">
                                                                            {job.yearsOfExperience}+ Years of Experience
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div onClick={() => router.push(`/job-apply/${job._id}`)} className="group flex items-center xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-1 cursor-pointer">
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
                                                                    <p className="font-normal xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[14px] leading-[24px] text-[#888888] group-hover:text-[#1E3A76]">
                                                                        Apply
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <div
                            onClick={() => router.push("/openings")}
                            className="xl:w-[194px] lg:w-[194px] md:w-[194px] sm:w-[194px] w-full h-[58px] flex justify-center items-center rounded-[4px] gap-2 bg-[#131313] cursor-pointer"
                        >
                            <p className="font-normal text-[16px] leading-[18px] text-[#FFFFFF]">See all openings</p>
                            <Image src={rightArrowIcon} alt="Openings" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>



            {/* Employee Benefits */}
            <div className='w-full bg-[#FAFAFA] flex flex-col xl:py-[72px] lg:py-[72px] md:py-[72px] sm:py-[72px] py-[50px] xl:px-[124px] lg:px-[60px] md:px-[60px] sm:px-[60px] px-[20px] items-center'>
                <div className='flex flex-col xl:gap-[80px] lg:gap-[60px] md:gap-[60px] sm:gap-[60px] gap-[32px] xl:w-[1180px] md:w-[714px] sm:w-[714px] w-full items-center'>
                    <p className='font-[300] xl:text-[60px] xl:leading-[71.6px] lg:text-[48px] lg:leading-[57.28px] md:text-[48px] md:leading-[57.28px] sm:text-[48px] sm:leading-[57.28px] text-[28px] leading-[33.41px] text-center text-[#131313] xl:max-w-[943px] md:max-w-[943px]'>We prioritise our employee&apos;s <span className='text-[#FBAE17]'> well-being.</span></p>
                    <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:gap-[0px] lg:gap-[0px] md:gap-[0px] sm:gap-[0px] gap-[6px]'>
                        {employeeBenefits?.map((benefit, index) => (
                            <div key={index} className={`xl:h-[460px] xl:w-[397.5px] lg:h-[309px] lg:w-[357px] md:h-[309px] md:w-[357px] sm:w-[357px] w-[335px] flex flex-col items-center xl:pt-[72px] xl:pb-[64px] xl:px-[44px] xl:gap-[40px] lg:pt-[40px] lg:pb-[40px] lg:px-[32px] lg:gap-[32px] md:pt-[40px] md:pb-[40px] md:px-[32px] md:gap-[32px]  sm:pt-[40px] sm:pb-[40px] sm:px-[32px] sm:gap-[32px] pt-[32px] pb-[32px] px-[32px] gap-[32px] ${index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#FAFAFA]'}`}>
                                <Image src={benefit?.icon} alt={benefit.title} className='xl:w-[100px] xl:h-[100px] lg:w-[64px] lg:h-[64px] md:w-[64px] md:h-[64px] sm:w-[64px] sm:h-[64px] w-[52px] h-[52px]' />
                                <div className='flex flex-col xl:gap-5 lg:gap-5 md:gap-5 sm:gap-5 gap-3'>
                                    <p className='font-[600] xl:text-[20px] xl:leading-[23.87px] lg:text-[18px] lg:leading-[21.48px] md:text-[18px] md:leading-[21.48px] sm:text-[18px] sm:leading-[21.48px] text-[16px] leading-[19.09px] text-[#131313]'>{benefit?.title}</p>
                                    <p className='font-normal xl:text-[18px] xl:leading-7 lg:text-[16px] lg:leading-[23px] md:text-[16px] md:leading-[23px] sm:text-[16px] sm:leading-[23px] text-[14px] leading-[19px] text-[#6D6D6D]'>{benefit?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Life at squadra */}
            {/* <div className='w-full bg-[#FFFFFF] xl:py-[72px] md:py-[72px] sm:py-[40px] py-[40px] xl:px-[124px] md:px-[60px] sm:px-[20px] px-[20px] flex flex-col gap-[44px] items-center'>
                <div className='flex flex-col xl:gap-[44px] md:gap-[44px] sm:gap-[32px] gap-[32px] xl:w-[1180px] md:w-[714px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <p className='font-[300] xl:text-[62px] xl:leading-[72px] md:text-[48px] md:leading-[57.28px] sm:text-[28px] sm:leading-[33.41px] text-[28px] leading-[33.41px] text-center text-[#131313]'>Life at <span className='text-[#FBAE17]'>Squadra Media</span></p>
                        <p className='font-normal xl:text-[18px] xl:leading-[24px] md:text-[16px] md:leading-[21px] sm:text-[14px] sm:leading-[19px] text-center text-[#6D6D6D]'>A space to unlock your true potential, chase your dreams, and embrace your <br /> passion all while enjoying every moment with fun and laughter!</p>
                    </div>
                    <div className='flex flex-col xl:gap-3 md:gap-3 sm:gap-[40px] gap-[40px]'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-3'>
                                <div className='flex flex-col gap-3'>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] md:w-[282px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/5555.webp" alt='Life at Squadra' width={420} height={194} className="xl:w-[420px] xl:h-[194px] md:w-[282px] md:h-[194px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] md:w-[282px] bg-gray-400'></div>
                                </div>
                                <div className='rounded-[6px] xl:w-[760px] md:w-[420px] h-[400px]'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/444.webp" alt='Life at Squadra' width={760} height={400} className="xl:w-[760px] md:w-[420px] h-[400px] object-cover" />
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='rounded-[6px] xl:w-[760px] md:w-[420px] h-[400px] bg-gray-400'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp" alt='Life at Squadra' width={760} height={400} className="xl:w-[760px] md:w-[420px] h-[400px] object-cover" />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] md:w-[282px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg" alt='Life at Squadra' width={420} height={194} className="xl:w-[420px] h-[194px] md:w-[282px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] md:w-[282px] bg-gray-400'></div>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[6px] xl:w-[1180px] xl:h-[440px] md:w-[714px] md:h-[400px] sm:w-full sm:h-[260px] w-full h-[260px] bg-gray-400'></div>
                    </div>
                </div>
            </div> */}

            <div className='w-full bg-[#FFFFFF] xl:py-[72px] lg:py-[72px] md:py-[72px] sm:py-[72px] py-[40px] xl:px-[124px] lg:px-[60px] md:px-[60px] sm:px-[60px] px-[20px] flex flex-col gap-[44px] items-center'>
                <div className='flex flex-col xl:gap-[44px] lg:gap-[44px] md:gap-[44px] sm:gap-[44px] gap-[32px] xl:w-[1180px] lg:w-[714px] md:w-[714px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <p className='font-[300] xl:text-[62px] xl:leading-[72px] lg:text-[48px] lg:leading-[57.28px] md:text-[48px] md:leading-[57.28px] sm:text-[48px] sm:leading-[57.28px] text-[28px] leading-[33.41px] text-center text-[#131313]'>Life at <span className='text-[#FBAE17]'>Squadra Media</span></p>
                        <p className='font-normal xl:text-[18px] xl:leading-[24px] lg:text-[16px] lg:leading-[21px] md:text-[16px] md:leading-[21px] sm:text-[16px] sm:leading-[21px] text-center text-[#6D6D6D]'>A space to unlock your true potential, chase your dreams, and embrace your <br /> passion all while enjoying every moment with fun and laughter!</p>
                    </div>
                    <div className='flex flex-col xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-[40px]'>


                        <div className='flex flex-col gap-3'>
                            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center gap-3'>
                                <div className='flex xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-row gap-3'>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] lg:w-[282px] md:w-[282px] sm:w-[282px] w-[163.5px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/5555.webp" alt='Life at Squadra' width={420} height={194} className="xl:w-[420px] xl:h-[194px] lg:w-[282px] lg:h-[194px] md:w-[282px] md:h-[194px] sm:w-[282px] w-[163.5px] h-[194px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] lg:w-[282px] md:w-[282px] sm:w-[282px] w-[163.5px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/7.jpg" alt='Life at Squadra' width={420} height={194} className="xl:w-[420px] xl:h-[194px] lg:w-[282px] lg:h-[194px] md:w-[282px] md:h-[194px] sm:w-[282px] w-[163.5px] h-[194px] object-cover" />
                                    </div>
                                </div>
                                <div className='rounded-[6px] xl:w-[760px] lg:w-[420px] md:w-[420px] sm:w-[420px] w-[335px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[200px]'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/444.webp" alt='Life at Squadra' width={760} height={400} className="xl:w-[760px] lg:w-[420px] md:w-[420px] sm:w-[420px] w-[335px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[200px] object-cover" />
                                </div>
                            </div>
                            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center gap-3'>
                                <div className='rounded-[6px] xl:w-[760px] lg:w-[420px] md:w-[420px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[200px] bg-gray-400 hidden sm:block'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp" alt='Life at Squadra' width={760} height={400} className="xl:w-[760px] lg:w-[420px] md:w-[420px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[200px] object-cover" />
                                </div>
                                <div className='flex xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-row gap-3'>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] lg:w-[282px] md:w-[282px] sm:w-[282px] w-[163.5px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg" alt='Life at Squadra' width={420} height={194} className="xl:w-[420px] h-[194px] lg:w-[282px] md:w-[282px] sm:w-[282px] w-[163.5px] object-cover" />
                                    </div>
                                    <div className='rounded-[6px] xl:w-[420px] h-[194px] lg:w-[282px] md:w-[282px] sm:w-[282px] w-[163.5px] bg-gray-400'>
                                        <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/5.jpg" alt='Life at Squadra' width={420} height={194} className="xl:w-[420px] h-[194px] lg:w-[282px] md:w-[282px] sm:w-[282px] w-[163.5px] object-cover" />
                                    </div>
                                </div>
                                <div className='rounded-[6px] xl:w-[760px] lg:w-[420px] md:w-[420px] sm:w-[420px] w-[335px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[200px] bg-gray-400 block sm:hidden'>
                                    <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp" alt='Life at Squadra' width={760} height={400} className="xl:w-[760px] lg:w-[420px] md:w-[420px] sm:w-[420px] w-[335px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[200px] object-cover" />
                                </div>
                            </div>
                        </div>


                        <div className='rounded-[6px] xl:w-[1180px] xl:h-[440px] lg:w-[714px] lg:h-[400px] md:w-[714px] md:h-[400px] sm:w-[714px] sm:h-[400px] w-full h-[260px] bg-gray-400'>
                            <Image src="https://squadra-media.s3.ap-south-1.amazonaws.com/DSC_3720+2+(1).webp" alt='Life at Squadra' width={760} height={400} className="xl:w-[1180px] xl:h-[440px] lg:w-[714px] lg:h-[400px] md:w-[714px] md:h-[400px] sm:w-[714px] sm:h-[400px] w-full h-[260px] object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopUi