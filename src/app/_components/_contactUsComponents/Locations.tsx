import Image from "next/image"

import location from '@/utilities/images/image 58.svg'

import phoneRingIcon from '@/utilities/icons/phone-ring.svg'
export default function Locations() {
  return (
    <div className="w-full xl:flex xl:items-center bg-[#FFFFFF] px-6 py-12 xl:px-[124px] md:px-[20px] lg:py-[80px]">
      <div className="max-w-[1350px] mx-auto">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-normal mb-4 lg:mb-[50px] sm:mb-[40px]">
          Our Locations
        </h1>

        <div className="flex items-center lg:gap-[27px] md:gap-[12px] gap-[12px] lg:flex-row md:flex-row sm:flex-row flex-col">
          <div className="flex flex-col lg:gap-[32px] md:gap-[16px] sm:gap-4 gap-4">
            <div className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px]">
              <Image
                src={location}
                alt="mail"
                width={380}
                height={380}
                className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px] object-cover"
              />
            </div>
            <div className="flex flex-col lg:gap-6 sm:gap-4">
              <p className="font-medium lg:text-[24.9px] md:text-[18px] leading-[27.38px] text-[#131313]">Bangalore, India</p>
              <p className="font-normal lg:text-[16px] lg:leading-6 md:text-[14px] md:leading-[19px] text-[#6D6D6D] lg:max-w-[380px] md:max-w-[230px]">5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd, HAL 2nd Stage, Bengaluru, Karnataka 560038</p>
            </div>
          </div>

          {/* <div className="flex flex-col lg:gap-[32px] md:gap-[16px] sm:gap-4 gap-4">
            <div className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px]">
              <Image
                src={location2}
                alt="mail"
                width={380}
                height={380}
                className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px] object-cover"
              />
            </div>
            <div className="flex flex-col lg:gap-6 sm:gap-4">
              <p className="font-medium lg:text-[24.9px] md:text-[18px] leading-[27.38px] text-[#131313]">Bangalore, India</p>
              <p className="font-normal lg:text-[16px] lg:leading-6 md:text-[14px] md:leading-[19px] text-[#6D6D6D] lg:max-w-[380px] md:max-w-[230px]">5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd, HAL 2nd Stage, Bengaluru, Karnataka 560038</p>
            </div>
          </div>

          <div className="flex flex-col lg:gap-[32px] md:gap-[16px] sm:gap-4 gap-4">
            <div className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px]">
              <Image
                src={location3}
                alt="mail"
                width={380}
                height={380}
                className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] sm:h-[230px] sm:w-[230px] object-cover"
              />
            </div>
            <div className="flex flex-col lg:gap-6 sm:gap-4">
              <p className="font-medium lg:text-[24.9px] md:text-[18px] leading-[27.38px] text-[#131313]">Bangalore, India</p>
              <p className="font-normal lg:text-[16px] lg:leading-6 md:text-[14px] md:leading-[19px] text-[#6D6D6D] lg:max-w-[380px] md:max-w-[230px]">5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd, HAL 2nd Stage, Bengaluru, Karnataka 560038</p>
            </div>
          </div> */}
        </div>

        <div className="flex lg:gap-[4px] sm:gap-[4px] gap-[2px] items-center lg:mt-[50px] md:mt-[40px] mt-[32px]">
          <div className="py-4 lg:w-[594px] sm:w-[355px] w-[170px] bg-[#FAFAFA] flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center gap-3">
                <Image
                  src={phoneRingIcon}
                  alt="mail"
                  width={20}
                  height={20}
                />
                <p className="font-normal lg:text-[20px] lg:leading-[26px] sm:text-[20px] sm:leading-[26px] text-[14px] leading-[16.94px] text-[#6D6D6D]">General Enquiry</p>
              </div>
              <p className="font-semibold lg:text-[32px] lg:leading-[38.73px] md:text-[28px] md:leading-[33.89px] text-[14px] leading-[17px] text-[#3D3D3D]">+91 96068 27067</p>
            </div>
          </div>

          <div className="py-4 lg:w-[594px] sm:w-[355px] w-[170px] bg-[#FAFAFA] flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center gap-3">
                <Image
                  src={phoneRingIcon}
                  alt="mail"
                  width={20}
                  height={20}
                />
                <p className="font-normal lg:text-[20px] lg:leading-[26px] sm:text-[20px] sm:leading-[26px] text-[14px] leading-[16.94px] text-[#6D6D6D]">HR Enquiry</p>
              </div>
              <p className="font-semibold lg:text-[32px] lg:leading-[38.73px] md:text-[28px] md:leading-[33.89px] text-[14px] leading-[17px] text-[#3D3D3D]">hr@squadramedia.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

