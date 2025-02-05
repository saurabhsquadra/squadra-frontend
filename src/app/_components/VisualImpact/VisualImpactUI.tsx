/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'
import Image from 'next/image'
import React from 'react'
import { HoverButton } from '../ITServices/DesktopUi';
import arrowRight from '@/utilities/images/arrow-right.svg'
import righticon from '@/utilities/images/right-arrow.svg'
import CommercialPhotographyImage from '@/utilities/images/commercial-photography.png'
import corporateFilmsImage from '@/utilities/images/corporate-films.png'
import promotionalVideosImage from '@/utilities/images/promotional-videos.png'
import dronePhotographyImage from '@/utilities/images/drone-photography.png'
import eventPhotographyImage from '@/utilities/images/event-photography.png'
import cinematicVisualsImage from '@/utilities/images/cinematic-visuals.png'
import visualImageOne from '@/utilities/images/visual-1.png'
import visualImageTwo from '@/utilities/images/visual-2.png'
import visualImageThree from '@/utilities/images/visual-3.png'
import visualImageFour from '@/utilities/images/visual-4.png'
import visualImageFive from '@/utilities/images/visual-5.png'
import visualImageSix from '@/utilities/images/visual-6.png'
import visualImageSeven from '@/utilities/images/visual-7.png'
import visualImageEight from '@/utilities/images/visual-8.png'
import visualImageNine from '@/utilities/images/visual-9.png'
import visualImageTen from '@/utilities/images/visual-10.png'
import visualImageEleven from '@/utilities/images/visual-11.png'

function VisualImpactUi() {

    const services = [
        {
            category: "Branding",
            title: "Commercial Photography",
            description: "Whether for your website, e-commerce, or social media, we provide professional photography and video production to ensure your products and brand stand out.",
            image: CommercialPhotographyImage,
            maxParagraphWidth: "max-w-[504px]"
        },
        {
            category: "StoryTelling",
            title: "Corporate Films",
            description: "Tell your company’s story with high-quality videos that inspire, inform, and engage. From brand films to training videos, showcase your corporate vision like never before.",
            image: corporateFilmsImage,
            maxParagraphWidth: "max-w-[504px]"
        },
        {
            category: "Engagement",
            title: "Promotional Videos",
            description: "Create short, impactful videos designed to captivate audiences and promote your products, services, or events across digital platforms.",
            image: promotionalVideosImage,
            maxParagraphWidth: "max-w-[374px]"
        },
        {
            category: "Perspective",
            title: "Drone Photography",
            description: "Capture breathtaking aerial perspectives with cutting-edge drone technology, perfect for real estate, events, and cinematic storytelling.",
            image: dronePhotographyImage,
            maxParagraphWidth: "max-w-[374px]"
        },
        {
            category: "Showcase",
            title: "Event & Product Photography",
            description: "Document unforgettable moments and showcase your products with precision and style. Ideal for corporate events, exhibitions, and detailed product shots.",
            image: eventPhotographyImage,
            maxParagraphWidth: "max-w-[464px]"
        },
        {
            category: "Artistry",
            title: "Cinematic Visuals",
            description: "Immerse your audience in visually stunning, high-production-value content. Perfect for advertisements, brand films, and creative storytelling.",
            image: cinematicVisualsImage,
            maxParagraphWidth: "max-w-[447px]"
        }
    ]

    const records = [
        {
            recordNumber: "500+",
            title: "Commercial Photography",
            description: "Projects successfully delivered to elevate brand imagery."
        },
        {
            recordNumber: "200+",
            title: "Promotional videos",
            description: "Crafted to engage audiences and drive growth."
        },
        {
            recordNumber: "50+",
            title: "Corporate films",
            description: "Crafted to engage audiences and drive growth."
        }
    ]

    return (
        <div className='w-full flex flex-col items-center bg-[#000000]'>

            {/*Records section*/}
            <div className='py-[120px] xl:px-[124px] lg:px-[40px] md:px-[40px] flex items-center xl:gap-[45.5px] lg:gap-[30px] md:gap-[30px]'>
                {records?.map((record, index) => {
                    return (
                        <div key={index} className='py-10 px-5 flex flex-col xl:gap-6 lg:gap-5 md:gap-5'>
                            <p className='font-[300] xl:text-[80px] lg:text-[60px] md:text-[60px] xl:leading-[95.47px] lg:leading-[71.6px] md:leading-[71.6px] text-center text-[#FFFFFF]'>{record?.recordNumber}</p>
                            <div className='flex flex-col gap-2 justify-center'>
                                <p className='font-normal xl:text-[20px] xl:leading-[23.87px] lg:text-[16px] lg:leading-[19.09px] md:text-[16px] md:leading-[19.09px] text-center text-[#FFFFFF]'>{record?.title}</p>
                                <p className='font-[300] xl:text-[16px] lg:text-[14px] md:text-[14px] leading-5 text-center text-[#F8F8F8] max-w-[248px]'>{record?.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/*Services section*/}
            <div className='flex flex-col xl:gap-[0px] lg:gap-[49px] md:gap-[49px]'>
                {services.map((service, index) => {
                    return (
                        <div key={index} className='xl:py-[120px] py-[0px] flex items-center xl:gap-[64px] lg:gap-[60px] md:gap-[60px]'>
                            <div className='flex flex-col gap-[60px] items-end'>
                                <div className='border-t-[0.75px] border-b-[0.75px] py-[9.39px] px-[11.52px] border-[#D1D1D1] font-normal text-[13px] leading-[15.51px] text-[#D1D1D1] w-fit'>{service.category}</div>
                                <div className='flex flex-col xl:gap-[80px] lg:gap-[30px] md:gap-[30px] items-end'>
                                    <div className='flex flex-col gap-3 items-end'>
                                        <p className='max-w-[506px] font-[300] xl:text-[80px] xl:leading-[95.47px] lg:text-[60px] lg:leading-[71.6px] md:text-[60px] md:leading-[71.6px] text-right text-[#FFFFFF]'>{service.title}</p>
                                        <p className={`py-1 font-[300] xl:text-[16px] xl:leading-7 lg:text-[14px] lg:leading-[16.71px] md:text-[14px] md:leading-[16.71px] text-[#E7E7E7] text-right ${service.maxParagraphWidth}`}>{service.description}</p>
                                    </div>
                                    <HoverButton
                                        href="#contact-section"
                                        buttonText="Get a Quote"
                                        defaultIcon={arrowRight}
                                        hoverIcon={righticon}
                                    />
                                </div>
                            </div>
                            <div className='xl:w-[720px] xl:h-[720px] lg:w-[388px] lg:h-[423px]'>
                                <Image src={service.image} alt="Commercial Photography" width={720} height={720} className='xl:w-[720px] xl:h-[720px] lg:w-[388px] lg:h-[423px] object-cover'/>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/*Visual journeys section*/}
            <div className='flex flex-col xl:pt-[120px] xl:pb-[80px] lg:pt-[0px] lg:pb-[0px] md:pt-[0px] md:pb-[0px] xl:mt-0 lg:mt-[49px] md:mt-[49px] xl:gap-[138px] lg:gap-[49px] md:gap-[49px]'>
                <div className='flex flex-col gap-6 items-center'>
                    <div className='border-t-[0.75px] border-b-[0.75px] py-[9.39px] px-[11.52px] border-[#D1D1D1] font-normal text-[12px] leading-[14.4px] text-[#D1D1D1]'>Beyond Ordinary</div>
                    <p className='font-medium xl:text-[100px] xl:leading-[120px] lg:text-[55px] lg:leading-[65.63px] md:text-[55px] md:leading-[65.63px] text-[#FFFFFF]'>Visual Journeys</p>
                    <p className='font-[300] text-[24px] leading-[28.64px] text-center text-[#B0B0B0] max-w-[596px]'>Explore projects where imagination meets execution, turning visions into stunning realities.</p>
                    <HoverButton
                        href="#contact-section"
                        buttonText="View Portfolio"
                        defaultIcon={arrowRight}
                        hoverIcon={righticon}
                    />
                </div>

                <div className='flex items-center xl:gap-5 lg:gap-[10px] md:gap-[10px]'>
                    <div className='flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px]'>
                        <div className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px]'>
                            <Image src={visualImageOne} alt='Visual one' className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] object-cover' />
                        </div>
                        <div className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px]'>
                            <Image src={visualImageTwo} alt='Visual one' className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] object-cover' />
                        </div>
                        <div className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px]'>
                            <Image src={visualImageThree} alt='Visual one' className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px]'>
                        <div className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px]'>
                            <Image src={visualImageFour} alt='Visual one' className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px] object-cover' />
                        </div>
                        <div className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px]'>
                            <Image src={visualImageFive} alt='Visual one' className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px] object-cover' />
                        </div>
                    </div>
                    <div className='xl:w-[420px] xl:h-[824px] lg:w-[236px] lg:h-[582px] md:w-[236px] md:h-[582px]'>
                        <Image src={visualImageSix} alt='Visual one' className='xl:w-[420px] xl:h-[824px] lg:w-[236px] lg:h-[582px] md:w-[236px] md:h-[582px] object-cover' />
                    </div>
                    <div className='flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px]'>
                        <div className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px]'>
                            <Image src={visualImageSeven} alt='Visual one' className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px] object-cover' />
                        </div>
                        <div className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px]'>
                            <Image src={visualImageEight} alt='Visual one' className='xl:w-[270px] xl:h-[402px] lg:w-[157px] lg:h-[286px] md:w-[157px] md:h-[286px] object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-col xl:gap-5 lg:gap-[10px] md:gap-[10px]'>
                        <div className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px]'>
                            <Image src={visualImageNine} alt='Visual one' className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] object-cover' />
                        </div>
                        <div className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px]'>
                            <Image src={visualImageTen} alt='Visual one' className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] object-cover' />
                        </div>
                        <div className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px]'>
                            <Image src={visualImageEleven} alt='Visual one' className='xl:w-[200px] xl:h-[261px] lg:w-[117px] lg:h-[187px] md:w-[117px] md:h-[187px] object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisualImpactUi