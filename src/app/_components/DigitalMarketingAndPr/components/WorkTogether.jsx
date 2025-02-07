import React from "react";
import {HoverButton} from "../../ITServices/DesktopUi";
import arrowRight from '@/utilities/images/arrow-right.svg'
import righticon from '@/utilities/images/right-arrow.svg'

const WorkTogether = () => {

    return (
        <div className="w-full bg-white flex flex-col items-center py-[72px] gap-[42px]">
            <div className="flex flex-col sm:gap-3 gap-0">
                <p className="font-bold sm:text-[22px] text-[16px] leading-[22px] text-[#4C6EFF] text-center">squadra media pvt</p>
                <p className="font-semibold sm:text-[22px] text-[16px] leading-[24.2px] text-[#131313] text-center">Have a Project in Mind ?</p>
            </div>
            <div className="flex flex-col sm:gap-2 gap-0">
                <p className="font-bold xl:text-[140px] sm:text-[110px] text-[44px] sm:leading-[148.2px] text-[#131313] text-center">LET&apos;S <span className="text-[#FBAE17]">WORK</span></p>
                <p className="font-bold xl:text-[140px] sm:text-[110px] text-[44px] sm:leading-[148.2px] text-[#131313] text-center">TOGETHER</p>
            </div>
            <HoverButton
                href="#contact-section"
                buttonText="VIEW JOBS" 
                defaultIcon={arrowRight}
                hoverIcon={righticon}
            />
        </div>
    );
};

export default WorkTogether;
